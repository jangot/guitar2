define([

    'jShop'

], function(jShop) {
    "use strict";

    jShop.service('auth', function($rootScope, $q) {
        return {
            login: function(login, password) {
                var deferred = $q.defer();

                deferred.resolve('There is auth');

                return deferred.promise;
            },
            logout: function() {

            }
        };
    });
});