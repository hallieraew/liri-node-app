require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var fs = require("fs");
var spotifyKey = new Spotify(keys.spotify);
var search= process.argv[2];

// fs.readFile("random.txt", "utf8", function(err, data) {
//     if (err) {
//         return console.log(err);
//     }
//     else {
        
//     });
// }
    
    
    spotifyKey
    .search({ type: 'track', query: search })
    .then(function(response) {
        console.log(response.track);
    })
    .catch(function(err) {
        console.log(err);
    });
