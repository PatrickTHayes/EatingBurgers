var express=require("express");
var bodyParser=require("body-parser");
var methodOverride=require("method-override");
var exphbs=require("express-handlebars");
var mysql = require('mysql');
var port=3000;
var app=express();
var routes=require("./controller/burgers_controller.js");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');


app.use("/",routes);
app.listen(port);

