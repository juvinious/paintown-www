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

.controller( 'DevCtrl', function DevCtrl( $scope, feed, icons, $sce, $http) {
    $scope.quickmenu = [
        {
            id: 'git',
            title: 'Git'
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
    $scope.users = [];
    //feed.get('https://sourceforge.net/p/paintown/code/feed')
    feed.get('https://github.com/kazzmir/paintown/commits/master.atom')
        .success(function(response){
            if (response.responseData) {
                angular.forEach(response.responseData.feed.entries, function (value, key) {
                    //console.log(value);
                    if (!(value.author in $scope.users)){
                        $http.get('https://api.github.com/users/' + value.author).then(function(response){
                            $scope.users[value.author] = response.data;
                        });
                    }
                    $scope.commits.push({
                        title: value.title,
                        link: value.link,
                        date: new Date(value.publishedDate),
                        author: value.author
                    });
                    //author: $sce.trustAsResourceUrl('http://ghbtns.com/github-btn.html?user=' + value.author + '&type=follow')
                });
            }
        });
})

;
