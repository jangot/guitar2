define([

    'jShop'

], function(jShop) {
    "use strict";

    jShop.provider('menu', function() {
        return {
            $get: function() {
                return [
                    {
                        title: 'Гитары',
                        link: 'guitars'
                    },
                    {
                        title: 'Эффекты',
                        link: 'fx'
                    }
                ]
            }
        }
    });
});