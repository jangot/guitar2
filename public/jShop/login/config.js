define([

    'jShop',

    'login/view/index/controller'

], function(jShop) {
    "use strict";

    jShop.config(function($stateProvider, routeConstructorProvider) {
        $stateProvider.state(
            'body.login',
            routeConstructorProvider.build({
                url: '/login',
                view: 'login/index',
                page: {
                    title: 'Авторизация'
                },
                menu: {
                    state: 'body.login',
                    title: 'Авторизация'
                }
            })
        );
    });

});