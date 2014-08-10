define([

    'jShop'

], function(jShop) {
    "use strict";

    jShop.directive('jShopNumber', function() {

        return {
            require: 'ngModel',
            link: function(scope, element, attrs, modelController) {
                modelController.$parsers.push(function(value) {
                    return value * 1;
                });
            }
        }

    });

});