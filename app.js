const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.get("/in.html", function(req, res){
    res.sendFile(__dirname + "/in.html");
})

app.get("/out.html", function(req, res){
    res.sendFile(__dirname + "/out.html");
})

app.get("/home.html", function(req, res){
    res.sendFile(__dirname + "/home.html");
})

app.get("/late.html", function(req, res){
    res.sendFile(__dirname + "/late.html");
})

app.post("/out.html", function(req, res){
    var name = req.body.name;
    var rollNo = req.body.rollNumber;
    var phoneNumber = req.body.phoneNumber;
    var roomNumber = req.body.roomNumber;
    var outTime = req.body.outTime;
    var date = req.body.date;
    var permission = req.body.permission;
    console.log(name+"\n"+rollNo+"\n"+phoneNumber+"\n"+roomNumber+"\n"+outTime+"\n"+date+"\n"+permission);
})

app.post("/in.html", function(req, res){
    var rollNo = req.body.rollNumber;
    var inTime = req.body.inTime;
    var date = req.body.date;
    var permission = req.body.permission;
    console.log(rollNo+"\n"+inTime+"\n"+date+"\n"+permission);
})

app.listen(process.env.PORT || 3000, function(){
    console.log("server running at port 3000");
})