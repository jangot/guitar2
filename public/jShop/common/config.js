define([

    '../jShop',

    'angular',

    'common/directives/menu/directive',
    'common/directives/pageTitle/directive',
    'common/directives/breadcrumb/directive',
    'common/directives/footer/directive',

    'common/services/stateData',
    'common/services/routeConstructor',
    'common/services/menu',

    'common/resources/guitar',

    'common/view/body/controller',
    'common/view/index/controller',
    'common/view/404/controller'

], function(jShop, angular) {
    "use strict";
    jShop.config(function($locationProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/404');

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

        $stateProvider.state(
            'body.404',
            routeConstructorProvider.build({
                url: '/404',
                view: 'common/404',
                page: {
                    title: 'Страница не найдена'
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