define([

    'jShop'

], function(jShop){
    "use strict";

    jShop.controller('AdminDb', function($scope, $http){
        $scope.methods = ['GET', 'POST'];

        $scope.request = {
            method: $scope.methods[0],
            url: '/api/brands',
            data: "{name:'gibson'}"
        };

        $scope.send = function() {
            $scope.result = 'wait...';
            $http($scope.request)
                .success(function() {
                    $scope.stataus = 'success';
                    $scope.result = 'ok';
                })
                .error(function() {
                    $scope.stataus = 'danger';
                    $scope.result = 'error';
                });
        };
    });
});
