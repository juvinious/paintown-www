require 'bundler/setup'

require 'colorize'
require 'rss'
require 'open-uri'
require 'pathname'
require 'fileutils'
require 'json'
require 'rest-client'
require 'filemagic'
require 'logger'

CONFIG_DIR = './config/'
CONFIG_FILE = CONFIG_DIR + 'config.json'
LOG_FILE = './run.log'

$log = Logger.new(LOG_FILE, File::WRONLY | File::APPEND)

def read_json(filename)
    puts "Reading data".green + " from " + "#{filename}".yellow
    unless File.exist? filename
        puts "Error! Could not find file '".red + "#{filename}".light_blue + "'!".red
        $log.error("Interrupted:  Could not find file #{filename}")
        exit
    end
    return JSON.parse(File.read filename)
end

def save_json(hash, filename)
    puts "Writing data".green + " to " + "#{filename}".yellow
    dir = File.dirname(filename)
    unless File.directory? dir
        FileUtils.mkdir_p(dir)
    end
    File.write(filename, JSON.pretty_generate(hash))
end

def save_settings(settings)
    save_json(settings, CONFIG_FILE)
end

def get_settings()
    settings = {
        'files' => 'https://sourceforge.net/projects/paintown/rss?path=/',
        'manifest' => CONFIG_DIR + 'manifest.json',
        'release_manifest' => CONFIG_DIR + 'releases.json',
        'file_manifest' => CONFIG_DIR + 'files.json',
        'api' => 'https://api.github.com',
        'accept' => 'application/vnd.github.v3+json',
        'oauth_token' => '',
        'user' => '',
        'repo' => '',
    }
    if !File.exist? CONFIG_FILE
        save_settings(settings)
    else
        settings = read_json(CONFIG_FILE)
    end
    return settings
end

COMMAND_HELP = "Usage:".green + " #{$0}".light_blue + " [-h] [-f file.json] [-c file.json]\n" +
               "-h, --help           ".white + "        Show this help\n".yellow +
               "-f, --fetch          ".white + "        Fetch files from provided manifest or manifest.json\n".yellow +
               "-c, --create-manifest".white + "        Create manifest only\n".yellow +
               "-r, --create-releases".white + "        Create releases from manifest on github\n".yellow +
               "-u, --upload-releases".white + "        Upload releases from release manifest on github\n".yellow

args = {}

ARGV.each do |arg|
    case arg
        when '-h', '--help'            then args[:help] = true
        when '-f', '--fetch'           then args[:fetch] = ''
        when '-c', '--create-manifest' then args[:manifest] = true
        when '-r', '--create-releases' then args[:releases] = true
        when '-u', '--upload-releases' then args[:upload] = true
        else
            if args[:fetch].eql? ''
                args[:fetch] = arg
            end
    end
end

def get_version(str)
    version = Pathname.new(str).sub('/paintown/', '').dirname().to_s
    if version.start_with? 'paintown '
        return version.sub('paintown ', '')
    end
    return version
end

def save_file(version, filename, link)
    dir = "./files/#{version}/"
    unless File.directory? dir
        FileUtils.mkdir_p(dir)
    end
    puts "Downloading".green + " #{filename}".light_blue + " to " + "#{dir}".yellow
    f = open(link)
    IO.copy_stream(f, dir + "/#{filename}")
end

def generate_manifest(settings)
    puts "Generating manifest".green
    puts "Fetching RSS".green + " from " + "#{settings['files']}".yellow  + "..."
    open(settings['files']) do |rss|
        feed = RSS::Parser.parse(rss)

        manifest = {}

        feed.channel.items.each do |item|
            version = get_version(item.title)
            version_name = "v" + version
            if version.downcase.include? 'alpha' or version.downcase.include? 'demo' or version.downcase.include? 'pre'
                version_name = version.gsub(/\s/, '-')
            elsif version.downcase.include? 'mod'
                version_name = 'mods'
            end
            path = Pathname.new(item.link)
            link = path.parent.to_s
            filename = path.parent.basename.to_s
                   
            if !manifest.key? version_name
                manifest[version_name] = []
            end
            manifest[version_name].push({
                'file' => filename,
                'version' => version_name,
                'link' => link,
            })
        end
    
        save_json(manifest, settings['manifest'])
    end
end

def check_manifest(settings)
    # Try manifest file
    unless File.exist? settings['manifest']
        generate_manifest(settings)
    end
end

def retrieve_files(settings)
    json = read_json(settings['manifest'])

    files = {}

    json.each do |key, version|
        version.each do |content|
            file = "./files/#{content['version']}/" + content['file']
           
            if !File.exist? file
                save_file(content['version'], content['file'], content['link'])
            else
                puts "File".green + " #{content['file']}".light_blue + " already in cache," + " skipping".yellow + "..."
            end
            
            unless files.key? content['version']
                files[content['version']] = []
            end
            files[content['version']].push({
                'name' => content['file'],
                'location' => file,
            })
        end
    end

    save_json(files, settings['file_manifest'])
end

def get_github_releases(settings)
    api_str = settings['api'] + "/repos/" + settings['user'] + "/" + settings['repo'] + "/releases"
    headers = {
        :Accept => settings['accept'],
        :Authorization => 'token ' + settings['oauth_token']
    }
    releases = [] 
    begin 
        response = RestClient.get api_str, headers
        releases = JSON.parse(response.body)
    rescue RestClient::Unauthorized, RestClient::Forbidden => e
        puts "Error connecting! Please check your oauth_token and/or user and repo.".red
        puts "Message: ".green + e.message
        puts "Response: ".green + JSON.pretty_generate(JSON.parse(e.response))
        $log.error("Interrupted:  " + e.message)
        exit
    end

    return releases
end

def release_exist(releases, name)
    releases.each do |release|
        if release['name'].eql? name
            return release
        end
    end
    return false
end

def create_releases(settings)
    json = read_json(settings['manifest'])
    api_str = settings['api'] + "/repos/" + settings['user'] + "/" + settings['repo'] + "/releases"
    headers = {
        :Accept => settings['accept'],
        :Authorization => 'token ' + settings['oauth_token']
    }
    
    releases = {}
    if File.exist? settings['release_manifest']
        releases = read_json(settings['release_manifest'])
    end

    upline_releases = get_github_releases(settings)

    json.each do |key, version|
        pre = false
        name = key
        
        # Check release manifest      
        if existing = release_exist(upline_releases, name) and !releases.key? name
            puts "Release ".green + "#{name}".light_blue + " already exists upline. Storing."
            releases[name] = existing
            next
        elsif release_exist(upline_releases, name) and releases.key? name
            puts "Release ".green + "#{name}".light_blue + " already exists. Skipping."
            next
        end

        release = {
            "tag_name" => name,
            "target_commitish" => "master",
            "name" => name,
            "body" => "Imported release [" + key + "] from SF.net",
            "draft" => false,
            "prerelease" => pre
        }
        begin
            puts "Creating ".green + "release " + "#{name}".yellow + " at " + "#{api_str}".light_blue
            r = RestClient.post api_str, release.to_json, headers
            response = JSON.parse(r.body)
            releases[name] = response
        rescue RestClient::Unauthorized, RestClient::Forbidden => e
            puts "Error connecting! Please check your oauth_token and/or user and repo.".red
            puts "Message: ".green + e.message
            puts "Response: ".green + JSON.pretty_generate(JSON.parse(e.response))
            $log.error("Interrupted:  " + e.message)
            exit
        rescue RestClient::UnprocessableEntity => e
            puts "Unable to process entity!".red
            puts "Message ".green + e.message
            puts "Response: ".green + JSON.pretty_generate(JSON.parse(e.response))
            $log.error("Interrupted:  " + e.message)
            exit
        end
    end
    save_json(releases, settings['release_manifest'])
end

def upload_assets(settings)
    releases = read_json(settings['release_manifest'])
    files = read_json(settings['file_manifest'])
    
    files.each do |version, list|
        list.each do |file|
            headers = {
                :Accept => settings['accept'],
                :Authorization => 'token ' + settings['oauth_token'],
                :content_type => FileMagic.new(FileMagic::MAGIC_MIME).file(file['location'])
            }
            upload_url = releases[version]['upload_url'].gsub(/\{\?name,label\}/,'?name=' + file['name'])
            begin
                puts 'Uploading'.green + " #{file['name']}".light_blue + " to " + upload_url.yellow
                r = RestClient.post upload_url, File.open(file['location'], 'r'), headers
                response = JSON.parse(r.body)
                $log.info("Uploaded file => " + JSON.pretty_generate(response))
            rescue RestClient::Unauthorized, RestClient::Forbidden => e
                puts "Error connecting! Please check your oauth_token and/or user and repo.".red
                puts "Message: ".green + e.message
                puts "Response: ".green + JSON.pretty_generate(JSON.parse(e.response))
                $log.error("Interrupted:  " + e.message)
                exit
            rescue RestClient::UnprocessableEntity => e
                puts "Unable to process entity!".red
                puts "Message ".green + e.message
                response = JSON.parse(e.response)
                if response['errors'].first()['code'].eql? 'already_exists'
                    puts "The asset " + file['name'].light_blue  + " is already uploaded. " + "Skipping...".green
                    next
                else
                    puts "Response: ".green + JSON.pretty_generate(response)
                    $log.error("Interrupted:  " + e.message)
                    exit
                end
            rescue Errno::EPIPE => e
                puts "Broken pipe! Please check if the asset is not already uploaded. Skipping for now.".red
                puts "Message: ".green + e.message
                $log.warn("File #{file['name']} not uploaded: " + e.message)
            end
        end
    end
end

$log.info("Started #{$0}")
settings = get_settings()

if ARGV.size < 1 or args[:help]
    puts COMMAND_HELP
elsif args[:manifest]
    generate_manifest(settings)
elsif args[:fetch]
    if args[:fetch].size > 0
        if !args[:fetch].eql? settings['manifest']
            settings['manifest'] = args[:fetch]
            save_settings(settings)
        end
    end
    check_manifest(settings)
    retrieve_files(settings)
elsif args[:releases]
    check_manifest(settings)
    create_releases(settings)
elsif args[:upload]
    check_manifest(settings)
    retrieve_files(settings)
    create_releases(settings)
    upload_assets(settings)
else
    puts COMMAND_HELP
end

