// dependencies
var express = require("express");
//var bodyParser = require("body-parser");
var path = require("path");

// set up link to database
var friends = require("./app/data/friends.js");

// set up express app and port
var app = express();
var PORT = process.env.PORT || 3000;

// set up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes setup
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});