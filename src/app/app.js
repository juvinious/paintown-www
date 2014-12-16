angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.downloads',
  'ngBoilerplate.irc',
  'ui.router'
])

.service('feed', function($http){
    return {
        get: function(url){
            return $http.jsonp('https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=-1&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    };
})

.service('menu', function(){
    return {
        get: function(){
            return [
                {
                    name: 'Home',
                    url: 'home',
                    external: false,
                    icon: 'fa-home'
                },
                {
                    name: 'About',
                    url: 'about',
                    external: false,
                    icon: 'fa-info-circle'
                },
                {
                    name: 'Downloads',
                    url: 'downloads',
                    external: false,
                    icon: 'fa-download'
                },
                {
                    name: 'Development',
                    url: 'development',
                    external: false,
                    icon: 'fa-code'
                },
                {
                    name: 'Screenshots & Videos',
                    url: 'media',
                    external: false,
                    icon: 'fa-file'
                },
                {
                    name: 'Forums',
                    url: 'https://sourceforge.net/p/paintown/discussion/?source=navbar',
                    external: true,
                    icon: 'fa-book'
                },
                {
                    name: 'IRC',
                    url: 'irc',
                    external: false,
                    icon: 'fa-comments'
                },
                {
                    name: 'Support',
                    url: 'https://sourceforge.net/projects/paintown/support?source=navbar',
                    external: true,
                    icon: 'fa-question-circle'
                }
            ];
        }
    };
})

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, menu ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Paintown' ;
    }
  });

  $scope.menuItems = menu.get();
})

;

