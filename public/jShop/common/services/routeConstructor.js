define([
    'jShop',
    'angular',
    'angularAMD'

], function(jShop, angular, angularAMD){
    "use strict";

    jShop.provider('routeConstructor', function(){

        var COMMON_RESOLVE = {};

        function getResolve(params) {
            return angular.extend(COMMON_RESOLVE, params.resolve);
        }

        function getViewPath(viewParts) {
            return '/jShop/' + viewParts[0] + '/view/' + viewParts[1]
        }

        function getControllerName(viewParts) {
            var controllerParts = viewParts.map(function (part) {
                return part.charAt(0).toUpperCase() + part.slice(1);
            });

            console.log(controllerParts.join(''))
            return controllerParts.join('');
        }

        return {
            build: function(params) {
                if (!params.view) {
                    throw Error("View is not define.");
                }

                var viewPathParts = params.view.split('/');

                return {
                    templateUrl: getViewPath(viewPathParts) + '/template.html',
                    controller: getControllerName(viewPathParts),
                    resolve: getResolve(params)
                };

            },
            $get: function(){
                return {}
            }
        }
    });
});
