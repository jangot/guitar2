define([

    'jShop'

], function(jShop){
    "use strict";

    jShop.controller('GuitarsIndex', function($scope, Guitars, StringArea){
        var brands, types, guitars;

        function loadData() {
            brands = StringArea.query({type:'brands'});
            brands.$promise
                .then(function() {
                    types = StringArea.query({type:'types'});

                    return types.$promise;
                })
                .then(function() {
                    guitars = Guitars.query();

                    return guitars.$promise;
                })
                .then(function() {
                    $scope.guitars = guitars;
                    $scope.brands = brands;
                    $scope.types = types;
                });
        }

        loadData();

        $scope.getType = function(typeId) {
            var result = '';
            _.forEach(types, function(type) {
                if (type.id == typeId) {
                    result = type.name;
                    return false;
                }
            });

            return result;
        }

        $scope.getBrand = function(brandId) {
            var result = '';
            _.forEach(brands, function(brand) {
                if (brand.id == brandId) {
                    result = brand.name;
                    return false;
                }
            });

            return result;
        }
    });
});
