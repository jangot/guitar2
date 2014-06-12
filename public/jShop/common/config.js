define([

    '../jShop',

    'angular',

    'common/directives/menu/directive',
    'common/directives/pageTitle/directive',
    'common/directives/breadcrumb/directive',

    'common/services/stateData',
    'common/services/routeConstructor',
    'common/services/menu',

    'common/view/body/controller',
    'common/view/index/controller'

], function(jShop, angular) {
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

        $stateProvider.state(
            'body.index',
            routeConstructorProvider.build({
                url: '/',
                view: 'common/index',
                page: {
                    title: 'Главная страница'
                }
            })
        );
    });

    jShop.run(function(routeConstructor, menu) {
        var routeVars = routeConstructor.getVars();
        angular.forEach(routeVars.menu, function(value) {
            menu.push(value);
        });
    });
});