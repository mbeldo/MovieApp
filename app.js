var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/results", function(req,res) {
    
    var searchQuery = req.query.search; 
    var url = "http://omdbapi.com/?s=";
    
    request(url + searchQuery, function(error, response, body) {
      if(!error && response.statusCode == 200) {
          var data = JSON.parse(body);
          res.render("results", {data: data});
      }
     
  }); 
     
});


app.get("/", function(req,res) {
    res.render("search");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Movie application has started");
});
