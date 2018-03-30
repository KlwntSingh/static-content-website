
var express = require('express');
var app = express();
var cors = require("cors");
var PORT = 3003;
var path = require('path');

var startServer = function (app) {
	var server = app.listen(PORT || 3001);
	console.log("server started" + PORT);
};

app.get('/favicon.ico', function(req, res) {
	res.status(204);
});

app.use("/", express.static('./content'));

app.use(cors());


startServer(app);
