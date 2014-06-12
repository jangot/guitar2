define([

    '../jShop',

    'guitars/view/index/controller'

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
    });

});