define([

    'jShop'

], function(jShop){
    "use strict";

    jShop.controller('GuitarsAdd', function($scope, Guitars, StringArea){
        var brands, types;

        $scope.guitar = {
            brand_id: null,
            type_id: null,
            strings_number: null
        };

        $scope.strings_number = [4, 5, 6, 7, 8];

        $scope.save = function() {
            var result = Guitars.create($scope.guitar);
        }

        function loadData() {
            brands = StringArea.query({type:'brands'});
            brands.$promise
                .then(function() {
                    types = StringArea.query({type:'types'});

                    return types.$promise;
                })
                .then(function() {
                    $scope.brands = brands;
                    $scope.types = types;
                });
        }

        loadData();
    });
});
