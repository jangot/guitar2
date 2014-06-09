define([

    'jShop'

], function(jShop) {
    "use strict";

    jShop.directive('jShopPageTitle', function() {
        return {
            restrict: 'E',
            templateUrl: '/jShop/common/directives/pageTitle/template.html',
            link: function(scope, element, attrs) {},
            controller: function($scope, menu) {
                function updateCurrent() {
                    var path = $location.path();

                    $scope.current = path.split('/')[1];
                }

                updateCurrent();
                $scope.$on('$routeChangeSuccess', updateCurrent);
            }
        }
    });
});
