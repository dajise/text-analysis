require("@babel/polyfill");
var express = require("express");
var func = require("./public/src/index");
var app = express();

var port = process.env.PORT || 8080;
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", func.loadAnalysis);
app.get("/eventcsv", func.loadWebAnalysis);

app.listen(port, function() {
  console.log("api is running on http://localhost:" + port);
});
