define([

    '../jShop',

    'common/directives/menu/directive',
    'common/directives/breadcrumb/directive',

    'common/services/stateData',
    'common/services/routeConstructor',
    'common/services/menu',

    'common/view/guitars/controller',
    'common/view/fx/controller'

], function(jShop) {
    "use strict";

    jShop.config(function($locationProvider) {

        $locationProvider.html5Mode(true);
    });

    jShop.config(function($routeProvider, routeConstructorProvider) {

        $routeProvider.when(
            '/guitars',
            routeConstructorProvider.build({
                view: 'common/guitars',
                resolve: {
                    test: 'stateData'
                }
            })
        );

        $routeProvider.when(
            '/fx',
            routeConstructorProvider.build({
                view: 'common/fx'
            })
        );
    });

    jShop.run(function($rootScope, $routeParams) {
        $rootScope.$on('$routeChangeSuccess', function() {
            console.log(111, arguments)
        });
    });

});