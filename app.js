const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var campgrounds = [
        {name: "Foggy Lake", image: "http://photosforclass.com/download/37386589826"},
        {name: "Autumn Grove", image: "http://photosforclass.com/download/5518252117"},
        {name: "Mountain Lake", image: "http://photosforclass.com/download/9667057875"}
    ];
    
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/",(req, res)=>{
    res.render("landing");
});

app.get("/campgrounds",(req, res)=>{
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds",(req, res)=>{
    var name = req.body.name;
    var image = req.body.image;
    var  newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new",(req, res)=>{
    res.render("new");
});

app.get("*",(req, res)=>{
    res.send("Sorry, page is not available");
});
const port = 3000;
app.listen(port || process.env.PORT, function(){
        console.log("Server Started on localhost:" + port);
});