angular.module( 'ngBoilerplate.media', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'quickMenu'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'media', {
    url: '/media',
    views: {
      "main": {
        controller: 'MediaCtrl',
        templateUrl: 'media/media.tpl.html'
      }
    },
    data:{ pageTitle: 'Screenshots & Videos' }
  });
})

.controller( 'MediaCtrl', function MediaCtrl( $scope) {
    $scope.quickmenu = [
        {
            id: 'images',
            title: 'Screenshots'
        },
        {
            id: 'videos',
            title: 'Videos'
        }
    ];
})

;
