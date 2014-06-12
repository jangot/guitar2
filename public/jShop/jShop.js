define([

    'angular',
    'angularResource',
    'uiRouter',

    'angularAMD',

    'uiBootstrap',
    'uiBootstrapTpl'

], function(angular) {
    return angular.module('jShop', [
        'ui.router',  'ui.bootstrap', 'ngResource'
    ]);
});