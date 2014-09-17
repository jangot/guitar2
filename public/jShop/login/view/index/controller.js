define([

    'jShop',

    'auth/services/auth'

], function(jShop){
    "use strict";

    jShop.controller('LoginIndex', function($scope, auth, flashMessage){
        $scope.isAuth = false;

        $scope.user = {
            login: '',
            password: ''
        }

        $scope.submit = function() {
            auth
                .login($scope.user.login, $scope.user.password)
                .then(function() {
                    $scope.isAuth = true;
                })
                .catch(function(error) {
                    flashMessage.error('Auth error.');
                });
        }
    });
});
