angular.module( 'ngBoilerplate.development', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'quickMenu'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'development', {
    url: '/development',
    views: {
      "main": {
        controller: 'DevCtrl',
        templateUrl: 'development/development.tpl.html'
      }
    },
    data:{ pageTitle: 'Development' }
  });
})

.controller( 'DevCtrl', function DevCtrl( $scope, feed, icons) {
    $scope.quickmenu = [
        {
            id: 'svn',
            title: 'Subversion'
        },
        {
            id: 'faq',
            title: 'FAQ'
        },
        {
            id: 'testing',
            title: 'Testing / Unstable'
        },
        {
            id: 'commits',
            title: 'Recent Commmits'
        }
    ];
    $scope.commits = [];
    feed.get('https://sourceforge.net/p/paintown/code/feed')
        .success(function(response){
            if (response.responseData) {
                angular.forEach(response.responseData.feed.entries, function (value, key) {
                    //console.log(value);
                    $scope.commits.push({
                        title: value.title,
                        link: value.link,
                        date: value.publishedDate
                    });
                });
            }
        });
})

;
