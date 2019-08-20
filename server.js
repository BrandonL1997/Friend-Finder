var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure the Express application
var app = express();
var PORT = 8000 || process.env.PORT;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, '/public')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
// require(path.join(__dirname, './app/routing/apiRoutes'))(app);
// require("./app/routing/apiRoutes.js")(app);
require("./app/routing/apiroutes")(app);
require("./app/routing/htmlroutes")(app);
// require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});