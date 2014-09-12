define([

    'jShop',

    'admin/view/db/controller'

], function(jShop) {
    "use strict";

    jShop.config(function($stateProvider, routeConstructorProvider) {
        $stateProvider.state(
            'body.adminBd',
            routeConstructorProvider.build({
                url: '/admin/db',
                view: 'admin/db',
                page: {
                    title: 'БД'
                },
                menu: {
                    state: 'body.adminBd',
                    title: 'БД'
                }
            })
        );
    });

});