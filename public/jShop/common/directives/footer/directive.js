define([

    'jShop'

], function(jShop) {
    "use strict";

    jShop.directive('jShopFooter', function() {
        return {
            restrict: 'E',
            templateUrl: '/jShop/common/directives/footer/template.html',
            link: function(scope, element, attrs) {},
            controller: function() {}
        }
    });
});
