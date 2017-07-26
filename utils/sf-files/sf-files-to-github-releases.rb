require 'bundler/setup'

require 'colorize'
require 'rss'
require 'open-uri'
require 'pathname'
require 'fileutils'
require 'json'

paintown_url = 'https://sourceforge.net/projects/paintown/rss?path=/'

COMMAND_HELP = "Usage:".green + " #{$0}".light_blue + " [-h] [-f file.json] [-c file.json]\n" +
               "-h, --help           ".white + "        Show this help\n".yellow +
               "-f, --fetch          ".white + "        Fetch files from provided manifest or manifest.json\n".yellow +
               "-c, --create-manifest".white + "        Create manifest only\n".yellow

args = {}

ARGV.each do |arg|
    case arg
        when '-h', '--help'            then args[:help] = true
        when '-f', '--fetch'           then args[:fetch] = ''
        when '-c', '--create-manifest' then args[:manifest] = true
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

def generate_manifest(url)
    puts "Fetching RSS".green + " from " + "#{url}".yellow  + "..."
    open(url) do |rss|
        feed = RSS::Parser.parse(rss)

        manifest = {}

        feed.channel.items.each do |item|
            version = get_version(item.title)
            path = Pathname.new(item.link)
            link = path.parent.to_s
            filename = path.parent.basename.to_s
                   
            if !manifest.key? version
                manifest[version] = []
            end
            manifest[version].push({
                'file' => filename,
                'version' => version,
                'link' => link,
            })
        end

        puts "Writing".green + " manifest.json".yellow
        File.write('manifest.json', JSON.pretty_generate(manifest))
    end
end

def retrieve_files(manifest)
    puts "Retrieving files".green + " from " + "#{manifest}".yellow
    unless File.exist? manifest
        puts "Error! Could not find file '".red + "#{manifest}".light_blue + "'!".red
        exit
    end

    open(manifest) do |input|
        json = JSON.parse(input.read)
        json.each do |key, version|
            version.each do |content|
                file = "./files/#{content['version']}/" + content['file']
                if !File.exist? file
                    save_file(content['version'], content['file'], content['link'])
                else
                    puts "File".green + " #{content['file']}".light_blue + " already in cache," + " skipping".yellow + "..."
                end
            end
        end
    end
end

if ARGV.size < 1 or args[:help]
    puts COMMAND_HELP
    exit
elsif args[:manifest]
    puts "Generating manifest".green
    generate_manifest(paintown_url)
    exit
elsif args[:fetch]
    if args[:fetch].size > 0
        retrieve_files(args[:fetch])
    else
        # Try manifest.json
        unless File.exist? 'manifest.json'
            generate_manifest(paintown_url)
        end
        retrieve_files('manifest.json')
    end
end

