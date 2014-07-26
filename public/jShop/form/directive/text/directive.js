define([

    'jShop'

], function(jShop) {
    "use strict";

    jShop.directive('jShopFormText', function() {
        return {
            restrict: 'E',
            templateUrl: '/jShop/form/directives/text/template.html',
            link: function(scope, element, attrs) {},
            controller: function() {}
        }
    });
});
