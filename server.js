
var express = require("express");
var app = express();
var router = express.Router();

router.use(express.static(__dirname + '/public'));

router.use('/guitars', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});



var apiAction = require('./server/api');
router.use('/api', apiAction);
app.use(router);

app.listen(3000);

