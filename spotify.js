require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var fs = require("fs");
var spotify = new Spotify(keys.spotify);
var search= process.argv[2];

fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
        return console.log(err);
    }
    else {
        
        spotify
        .search({ type: 'track', query: search })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(err) {
            console.log(err);
        });
    }
});


