define([

    '../jShop',

    'common/directives/menu/directive',
    'common/directives/pageTitle/directive',
    'common/directives/breadcrumb/directive',

    'common/services/stateData',
    'common/services/routeConstructor',
    'common/services/menu',

    'common/view/fx/controller',
    'common/view/body/controller'

], function(jShop) {
    "use strict";
    jShop.config(function($locationProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/guitars');

        $locationProvider.html5Mode(true);
    });
    jShop.config(function($stateProvider, routeConstructorProvider) {
        $stateProvider.state(
            'body',
            routeConstructorProvider.build({
                abstract: true,
                resolve: {},
                view: 'common/body'
            })
        );
    });

});