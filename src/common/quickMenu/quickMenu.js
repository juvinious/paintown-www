/**
 * Created by mgavidia on 12/17/14.
 */
angular.module( 'quickMenu', [] )

.service('anchor', function($anchorScroll, $location){
    return {
        to: function(id){
            $location.hash(id);
            $anchorScroll();
        }
    };
})

.directive( 'quickMenu', function() {
    return {
        controller: function($scope, anchor){
            $scope.anchor = function(id) {
                anchor.to(id);
            };
        },
        restrict: 'E',
        templateUrl: 'quickMenu/quickMenu.tpl.html'
    };
})

;

