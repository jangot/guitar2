define([

    'jShop'

], function(jShop) {
    "use strict";

    jShop.directive('jShopMenu', function() {
        return {
            restrict: 'E',
            templateUrl: '/jShop/directives/menu/template.html',
            link: function(scope, element, attrs) {},
            controller: function($scope){
                $scope.items = [
                    1, 2, 3, 4, 5
                ]
            }
        }
    });
});
