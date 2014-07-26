var http = require('client-http');
var express = require("express");
var app = express();
var router = express.Router();

router.use(express.static(__dirname + '/public'));

router.use('/guitars', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

var dataServer = {
    protocol: 'http',
    domain: '127.0.0.1',
    port: '5000'
}
router.use('/api', function(req, res, next) {
    "use strict";

    var method = req.method.toLowerCase();
    var originalUrl = req.originalUrl;

    var url = dataServer.protocol +
        '://' +
        dataServer.domain +
        ':' +
        dataServer.port +
        originalUrl ;

    http[method](url, function(dataRes) {
        res.send(dataRes);
    });
})
app.use(router);

app.listen(3000);

