define([

    'jShop'

], function(jShop){
    "use strict";

    jShop.controller('GuitarsIndex', function($scope, Guitars){
        var guitars = Guitars.query();
        guitars.$promise.then(function(){
            $scope.guitars = guitars;
        })
    });
});
