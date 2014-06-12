define([

    'jShop'

], function(jShop) {
    "use strict";

    jShop.directive('jShopPageTitle', function() {
        return {
            restrict: 'E',
            templateUrl: '/jShop/common/directives/pageTitle/template.html',
            link: function(scope, element, attrs) {},
            controller: function($scope, $state) {
                $scope.title = $state.current.page.title
            }
        }
    });
});
