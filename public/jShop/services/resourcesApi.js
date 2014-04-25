define([

    'jShop',

    'angular'

], function(jShop, angular) {
    "use strict";

    jShop.factory('jShopResourcesApi', function(){

        var DEFAULT_ACTIONS = {
            get: { method: 'GET' },
            save: { method: 'PUT'},
            query: { method: 'GET'},
            remove: { method: 'DELETE'},
            create: { method: 'POST'}
        };

        function addUrlPrefix(url) {
            return url;
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
