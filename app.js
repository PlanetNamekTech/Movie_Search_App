const express = require('express');
const app = express();
const request = require('request');
app.set("view engine", "ejs");

app.get("/", (req,res) =>{
    res.render("search");
});

app.get("/results", (req,res) =>{
    var search = req.query.search;
    var url = "http://omdbapi.com?s=" + search +"&apikey=thewdb"
    request(url, (error, response, body) =>{
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Movie app has started");
});