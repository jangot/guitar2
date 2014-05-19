define([

    '../jShop',

    'common/directives/menu/directive',

    'common/services/routeConstructor',
    'common/services/menu',

    'common/view/list/controller'

], function(jShop) {
    "use strict";

    jShop.config(function($locationProvider) {

        $locationProvider.html5Mode(true);
    });

    jShop.config(function($routeProvider, routeConstructorProvider) {
        $routeProvider.when(
            '/common',
            routeConstructorProvider.build({
                view: 'common/list'
            })
        );
    });

});