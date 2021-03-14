//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("home")
});
app.get("/about", function(req,res){
  res.render("about")
});
app.get("/news", function(req,res){
  res.render("news")
});
app.get("/global", function(req,res){
  res.render("global")
});
app.get("/contact", function(req,res){
  res.render("contact")
});

app.listen(process.env.PORT || 3000,function(){
  console.log("Server has started Successfully")
});
