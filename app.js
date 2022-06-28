const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

const items = [];

app.get("/", function(req, res) {

    let day = date.getDate();

    res.render("list", { kindOfDay: day, itemList: items });

});

app.post("/", function(req, res) {
    
    items.push(req.body.newItem);
    res.redirect("/");
});


app.listen(3000, function() {
    console.log("The server is running on port 3000.");
});