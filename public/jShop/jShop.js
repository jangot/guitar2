define([

    'angular',
    'angularResource',
    'angularRoute',

    'angularAMD',

    'uiBootstrap',
    'uiBootstrapTpl'

], function(angular) {
    return angular.module('jShop', [
        'ngRoute',  'ui.bootstrap', 'ngResource'
    ]);
});