define([

    'jShop'

], function(jShop) {

    jShop.service('flashMessage', function() {
        return {
            error: function(message) {
                alert('#error\n\n' + message);
            },

            info: function(message) {
                alert('#info\n\n' + message);
            }
        }
    });

});