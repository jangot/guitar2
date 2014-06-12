define([
    'jShop',
    'angular',
    'angularAMD'

], function(jShop, angular, angularAMD){
    "use strict";

    jShop.provider('routeConstructor', function(){

        var COMMON_RESOLVE = {};

        function getResolve(resolve) {
            resolve = resolve || {};

            return angular.extend(COMMON_RESOLVE, resolve);
        }

        function getViewPath(viewParts) {
            return '/jShop/' + viewParts[0] + '/view/' + viewParts[1]
        }

        function getControllerName(viewParts) {
            var controllerParts = viewParts.map(function (part) {
                return part.charAt(0).toUpperCase() + part.slice(1);
            });

            return controllerParts.join('');
        }

        return {
            build: function(params) {
                var newParams = {};
                if (params.view) {
                    var viewPathParts = params.view.split('/');
                    newParams.templateUrl = getViewPath(viewPathParts) + '/template.html';
                    newParams.controller = getControllerName(viewPathParts);

                    delete params.view;
                }
                angular.extend(newParams, params);
                newParams.resolve = getResolve(newParams.resolve);

                return newParams;
            },
            $get: function(){
                return {}
            }
        }
    });
});
