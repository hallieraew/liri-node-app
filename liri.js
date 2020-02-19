require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var commandInput = process.argv[2];
var searchInput = process.argv[3];
var artist = searchInput;
var songName = searchInput;
var moveTitle = searchInput;

switch (commandInput) {
    case "concert-this":
        getConcert(searchInput)
        break;

    case "spotify-this-song":
        getSong(searchInput)
        break;

    case "movie-this":
        getMovie(searchInput)
        break;

    case "do-what-it-says":
        doRandom(searchInput)
        break;
}

// need to sort out json values
function getConcert() {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            console.log("Venue: " + response.data[0].venue.name);
            console.log("\n-------------\n");
            console.log("Venue Location: " + response.data[0].venue.city);
            console.log("\n-------------\n");
            var date = moment(response.data[0].datetime).format('MM/DD/YYYY');
            console.log("Date of Event: " + date);
            console.log("\n-------------\n");
        }
            .catch(function (err) {
                console.log(err);
            })
    )
};

function getSong() {

    if (songName === "") {
        songName = "I Saw the Sign"
    }

    spotify
        .search({ type: 'track', query: songName })
        .then(function (response) {
            console.log(response.track);
        })
        .catch(function (err) {
            console.log(err);
        })
};

function getMovie() {
    axios.get("http://www.omdbapi.com/?t=" + moveTitle + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            // Then we print out the imdbRating
            console.log("\nMovie Title: " + response.data.Title);
            console.log("\n-------------\n");
            console.log("Release Year: " + response.data.Year);
            console.log("\n-------------\n");
            console.log("The movie's IMDB rating is: " + response.data.imdbRating);
            console.log("\n-------------\n");
            console.log("The movie's Rotten Tomatoes rating is: " + response.data.Ratings[1].Value);
            console.log("\n-------------\n");
            console.log("Produced in: " + response.data.Country);
            console.log("\n-------------\n");
            console.log("Language: " + response.data.Language);
            console.log("\n-------------\n");
            console.log("Plot: " + response.data.Plot);
            console.log("\n-------------\n");
            console.log("Actors: " + response.data.Actors)
        }
    ).catch(function (err) {
        console.log(err);
    })
};

function doRandom() {

}