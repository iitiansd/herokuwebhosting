const express = require("express");
require("./db/connection");
const bodyparser = require('body-parser');

const app = express();

const port = process.env.PORT || 7000;
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.send("Welcome MrSD world")
});
app.get("/about",function(req,res){
    res.send("this about page");
})
app.get("/calculator",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.post("/calculator",function(req,res){
   
    console.log(req.body);
    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);
    let sum = n1+n2;
    res.send("The sum of two number"+sum);
})
app.listen(port,function(req,res){
    console.log("success");
    
});

