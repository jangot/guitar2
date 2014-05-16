define([

    'jShop'

], function(jShop) {
    "use strict";

    jShop.directive('jShopMenu', function() {
        return {
            restrict: 'E',
            templateUrl: '/jShop/common/directives/menu/template.html',
            link: function(scope, element, attrs) {},
            controller: function($scope){
                $scope.items = [
                    {

                    }
                ]
            }
        }
    });
});
