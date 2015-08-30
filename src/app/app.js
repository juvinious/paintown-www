angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.downloads',
  'ngBoilerplate.contact',
  'ngBoilerplate.development',
  'ngBoilerplate.media',
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
                    type: 'internal',
                    icon: 'fa-home'
                },
                {
                    name: 'About',
                    url: 'about',
                    type: 'internal',
                    icon: 'fa-info-circle'
                },
                {
                    name: 'Downloads',
                    url: 'downloads',
                    type: 'internal',
                    icon: 'fa-download'
                },
                {
                    name: 'Development',
                    url: 'development',
                    type: 'internal',
                    icon: 'fa-code'
                },
                {
                    name: 'Screenshots & Videos',
                    url: 'media',
                    type: 'internal',
                    icon: 'fa-file'
                },
                {
                    name: 'Support',
                    url: '',
                    type: 'dropdown',
                    icon: 'fa-question-circle',
                    menus: [
                        {
                            name: 'Contact',
                            url: 'contact',
                            type: 'internal',
                            icon: 'fa-envelope'
                        },
                        {
                            name: 'IRC',
                            url: 'http://webchat.freenode.net/?randomnick=1&channels=paintown',
                            type: 'external',
                            icon: 'fa-comments'
                        },
                        {
                            name: 'Report a bug (Issues)',
                            url: 'https://github.com/kazzmir/paintown/issues',
                            type: 'external',
                            icon: 'fa-bug'
                        },
                        {
                            name: 'Wiki',
                            url: 'https://github.com/kazzmir/paintown/wiki',
                            type: 'external',
                            icon: 'fa-book'
                        },
                        {
                            name: 'Donate',
                            url: 'https://www.paypal.com/cgi-bin/webscr?item_name=Donation+to+PainTown&cmd=_donations&business=workmin%40ccs.neu.edu',
                            type: 'external',
                            icon: 'fa-credit-card'
                        }
                    ]
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

  $scope.currentYear = (new Date()).getFullYear();
})

;

