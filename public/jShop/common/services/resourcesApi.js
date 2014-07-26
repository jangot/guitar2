define([

    'jShop',

    'angular'

], function(jShop, angular) {
    "use strict";

    var PROTOCOL = 'http://';
    var HOST = '127.0.0.1:5000/';
    var URL_PREFIX = 'api/';

    jShop.factory('jShopResourcesApi', function($resource){

        var DEFAULT_ACTIONS = {
            get: {method: 'GET'},
            save: { method: 'PUT'},
            query:  {method:'GET'},
            remove: { method: 'DELETE'},
            create: { method: 'POST'}
        };

        function addUrlPrefix(url) {
            return '/' + URL_PREFIX + url;
        }

        return function(url, paramDefaults, actions) {
            // Append host and version to url
            url = addUrlPrefix(url);

            // Add response transformation for all actions
            actions = angular.extend({}, DEFAULT_ACTIONS, actions);
            angular.forEach(actions, function(settings) {

                settings.interceptor = {};

                if (settings.url) {
                    settings.url = addUrlPrefix(settings.url);
                }
            });

            // Add _meta param for new response version
            paramDefaults = paramDefaults || {};

           return $resource(url, paramDefaults, actions);
        }
    });
});
