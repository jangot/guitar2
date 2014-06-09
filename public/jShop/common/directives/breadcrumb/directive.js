define([

    'jShop'

], function(jShop) {
    "use strict";

    jShop.directive('jShopBreadcrumb', function() {
        return {
            restrict: 'E',
            templateUrl: '/jShop/common/directives/breadcrumb/template.html',
            link: function(scope, element, attrs) {},
            controller: function() {}
        }
    });
});
