require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotifyKey = new Spotify(keys.spotify);

    
    spotifyKey
    .search({ type: 'track', query: search })
    .then(function(response) {
        console.log(response.track);
    })
    .catch(function(err) {
        console.log(err);
    });
