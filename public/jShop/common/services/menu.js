define([

    'jShop'

], function(jShop) {
    "use strict";

    jShop.provider('menu', function() {
        return {
            $get: function() {
                return [
                    {
                        title: 'Test',
                        link: 'common'
                    },
                    {
                        title: 'Test1',
                        link: 'test1'
                    }
                ]
            }
        }
    });
});