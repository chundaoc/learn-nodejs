// Chundao Che, 2015-12-20
// create a simple web server

var express = require("express");
var app = express();

app.use(express.static(__dirname + "/"));

app.listen(5201);

