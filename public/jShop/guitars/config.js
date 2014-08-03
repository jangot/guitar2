define([

    'jShop',

    'guitars/resources/guitar',

    'guitars/view/index/controller',
    'guitars/view/add/controller'

], function(jShop) {
    "use strict";

    jShop.config(function($stateProvider, routeConstructorProvider) {
        $stateProvider.state(
            'body.guitars',
            routeConstructorProvider.build({
                url: '/guitars',
                view: 'guitars/index',
                page: {
                    title: 'Гитары'
                },
                menu: {
                    state: 'body.guitars',
                    title: 'Гитары'
                }
            })
        );

        $stateProvider.state(
            'body.guitarsAdd',
            routeConstructorProvider.build({
                url: '/guitars/add',
                view: 'guitars/add',
                page: {
                    title: 'Добавить гитару'
                }
            })
        );
    });

});