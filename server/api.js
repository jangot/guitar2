var Client = require('node-rest-client').Client;
var client = new Client();

var dataServer = require('./config');


var dataTypes = ['guitars', 'brands', 'types'];

module.exports = function(req, res, next) {
    "use strict";
    var actionType = req.param('_action');

    var method = actionType || req.method.toLowerCase();

    var originalUrl = req.originalUrl;

    var url = dataServer.protocol +
        '://' +
        dataServer.domain +
        ':' +
        dataServer.port +
        originalUrl ;

    client[method](url, function(data, response) {
        for (var type in data) {
            if (dataTypes.indexOf(type) !== -1) {
                data.data = data[type];
                delete data[type];
            }
        }
        res.send(JSON.stringify(data));
    });
}
