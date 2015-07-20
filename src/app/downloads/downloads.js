angular.module( 'ngBoilerplate.downloads', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'quickMenu'
])

.service('icons', function(){
    return {
        get: function(content){
            if (content.indexOf('.exe') > 0){
                return 'fa-windows';
            } else if (content.indexOf('.dmg') > 0){
                return 'fa-apple';
            } else if (content.indexOf('.tar.gz') > 0 || content.indexOf('.tar.bz2') > 0){
                return 'fa-linux';
            } else if (content.indexOf('.pkg') > 0 || content.indexOf('.dol') > 0){
                return 'fa-gamepad';
            } else if (content.indexOf('.tar.gz') > 0 || content.indexOf('.tar.bz2') > 0){
                return 'fa-linux';
            } else if (content.indexOf('.apk') > 0){
                return 'fa-android';
            } else if (content.indexOf('.txt') > 0){
                return 'fa-file-text-o';
            } else if (content.indexOf('.zip') > 0){
                return 'fa-file-o';
            } else if (content.indexOf('.jar') > 0){
                return 'fa-coffee';
            }

            return 'fa-file';
        }
    };
})

.config(function config( $stateProvider ) {
  $stateProvider.state( 'downloads', {
    url: '/downloads',
    views: {
      "main": {
        controller: 'DownloadsCtrl',
        templateUrl: 'downloads/downloads.tpl.html'
      }
    },
    data:{ pageTitle: 'Downloads' }
  });
})

.controller( 'DownloadsCtrl', function DownloadsCtrl( $scope, feed, icons) {
    feed.get('https://sourceforge.net/projects/paintown/rss?path=/')
        .success(function(response){
            var downloads = [];
            var mods = [];
            var dlmap = {};
            var modmap = {};
            var dlmenu = [];
            var modmenu = [];
            if (response.responseData) {
                angular.forEach(response.responseData.feed.entries, function (value, key) {
                    //console.log(value);
                    var title = value.title;
                    var version = title.match(/\/paintown\/(.+)\/(.*)/i);
                    var isMod = false;
                    if (!version){
                        version = title.match(/\/mods\/(.+)\/(.*)/i);
                        isMod = true;
                    }
                    if (!isMod) {
                        if (!dlmap[version[1]]) {
                            dlmap[version[1]] = downloads.push([])-1;
                            dlmenu.push({title: version[1]});
                        }
                        downloads[dlmap[version[1]]].push({
                            version: version[1],
                            title: version[2],
                            link: value.link,
                            date: new Date(value.publishedDate),
                            icon: icons.get(version[2])
                        });
                    } else {
                        if (!modmap[version[1]]) {
                            modmap[version[1]] = mods.push([])-1;
                            modmenu.push({title: version[1]});
                        }
                        mods[modmap[version[1]]].push({
                            version: version[1],
                            title: version[2],
                            link: value.link,
                            date: new Date(value.publishedDate),
                            icon: icons.get(version[2])
                        });
                    }
                });
            }

            $scope.quickmenu = [
                {
                    title: 'Downloads',
                    id: 'downloads',
                    submenu: dlmenu
                },
                {
                    title: 'Mods',
                    id: 'mods',
                    submenu: modmenu
                }
            ];

            $scope.downloads = downloads;
            $scope.mods = mods;
        });
})

;
