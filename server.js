var express = require("express");
var bodyParser = require("body-parser");
// Set Handlebars.
var exphbs = require("express-handlebars");
// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("assets"));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
