angular.module( 'ngBoilerplate.irc', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'irc', {
    url: '/irc',
    views: {
      "main": {
        controller: 'IrcCtrl',
        templateUrl: 'irc/irc.tpl.html'
      }
    },
    data:{ pageTitle: 'IRC' }
  });
})

.controller( 'IrcCtrl', function AboutCtrl( $scope ) {
})

;
