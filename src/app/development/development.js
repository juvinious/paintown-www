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
            id: 'commits',
            title: 'Recent Commmits'
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
            id: 'other',
            title: 'Other links'
        },
        {
            id: 'gource',
            title: 'SVN Visualization'
        },
        {
            id: 'changelog',
            title: 'Changelog'
        }
    ];
    $scope.faq = [
        {
            q: 'What language is Paintown written in?',
            a: 'C++'
        },
        {
            q: 'Is python a requirement to run Paintown?',
            a: 'No, python is optional at this point and definately not required for many game modes.'
        },
        {
            q: 'Is the source code to Paintown based on another engine?',
            a: 'No, Paintown was inspired by various other projects but the code is 100% original.'
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
                        date: new Date(value.publishedDate)
                    });
                });
            }
        });
})

;
