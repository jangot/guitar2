define([

    'jShop',

    'angular'

], function(jShop, angular) {
    "use strict";

    var URL_PREFIX = 'api/';

    jShop.factory('jShopResourcesApi', function($resource, $http){
        var DEFAULT_ACTIONS = {
            get: {method: 'GET'},
            save: { method: 'PUT'},
            query:  {method:'GET', isArray: true},
            remove: { method: 'DELETE'},
            create: { method: 'POST'}
        };

        function addUrlPrefix(url) {
            return '/' + URL_PREFIX + url;
        }

        var transformResponse = $http.defaults.transformResponse.concat([function(response) {
            var meta = response.meta || {};

            if (response.hasOwnProperty('data')
                && (_.isPlainObject(response.data)
                || _.isArray(response.data))) {
                response = response.data;
            }

            response.$$meta = meta;

            return response;
        }]);

        return function(url, paramDefaults, actions) {
            // Append host and version to url
            url = addUrlPrefix(url);
            console.log(url)

            // Add response transformation for all actions
            actions = angular.extend({}, DEFAULT_ACTIONS, actions);
            angular.forEach(actions, function(settings) {

                settings.interceptor = {};

                if (!settings.transformResponse) {
                    settings.transformResponse = transformResponse;
                }

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
