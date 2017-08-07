/**
 * Created 8/4/17.
 */
import axios from 'axios'

export default {
  url: 'http://api.github.com/repos/kazzmir/paintown/releases',
  contentType (name) {
    switch (name) {
      case 'application/zip': return 'file-zip-o'
      case 'application/x-dosexec; charset=binary': return 'windows'
      case 'application/gzip; charset=binary': return 'linux'
      case 'application/x-bzip2; charset=binary': return 'apple'
      case 'application/zlib; charset=binary': return 'apple'
      case 'application/zip; charset=binary': return 'file-zip-o'
      case 'text/plain; charset=us-ascii': return 'file-text'
      case 'application/java-archive; charset=binary': return 'coffee'
      case 'application/octet-stream; charset=binary': return 'gamepad'
      case 'image/x-tga; charset=binary': return 'gamepad'
      case 'application/vnd.android.package-archive': return 'android'
    }
    return 'file'
  },
  fetch (storage) {
    axios.get(this.url)
      .then(response => {
        // console.log(response.data)
        for (let value of response.data.reverse()) {
          let release = value.name
          for (let asset of value.assets) {
            let download = {
              title: asset['name'],
              date: asset['created_at'],
              link: asset['browser_download_url'],
              icon: this.contentType(asset['content_type'])
            }
            storage.addDownload(release, download)
          }
        }
      })
      .catch(e => {

      })
  }
}
