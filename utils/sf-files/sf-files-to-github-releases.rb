require 'bundler/setup'

require 'colorize'
require 'rss'
require 'open-uri'
require 'pathname'
require 'fileutils'
require 'json'

paintown_url = 'https://sourceforge.net/projects/paintown/rss?path=/'

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
    f = open(link)
    IO.copy_stream(f, dir.to_s + "/#{filename}")
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

# Get manifest if not already exist
generate_manifest(paintown_url)
