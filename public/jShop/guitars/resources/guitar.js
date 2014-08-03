define([

    'jShop',

    'common/services/resourcesApi'

], function(jShop) {
    "use strict";

    var RESOURCE_NAME = 'Guitars';

    jShop.factory(RESOURCE_NAME, function(jShopResourcesApi) {
        return jShopResourcesApi('guitars', {});
    });
});