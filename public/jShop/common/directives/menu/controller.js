define([

    'jShop'

], function(){
    "use strict";

    return function($scope, menu, $location){
        function updateCurrent() {
            var path = $location.path();

            $scope.current = path.split('/')[1];
        }

        $scope.items = menu;

        updateCurrent();
        $scope.$on('$routeChangeSuccess', updateCurrent);
    }
});
