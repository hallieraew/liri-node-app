require("dotenv").config();
var fs = require("fs");
var keys = require("./keys");
var axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var commandInput = process.argv[2];
var searchInput = process.argv[3];


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

function getConcert() {
    var artist = searchInput;
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            console.log("\n-------------\n");
            console.log("Venue: " + response.data[1].venue.name);
            console.log("Venue Location: " + response.data[1].venue.city);
            var date = moment(response.data[0].datetime).format('MM/DD/YYYY');
            console.log("Date of Event: " + date);
            console.log("\n-------------\n");
        }
    )
        .catch(function (err) {
            console.log(err);
        })
};

function getSong() {
    var songName = searchInput;
    var limit = 10;

    if (songName == "") {
        songName = "The Sign"
        limit = 1;
    }

    spotify
        .search({ type: 'track', query: songName, limit: limit })
        .then(function (response) {
                console.log("\nTrack: " + songName);
                console.log("\nArtist: " + response.tracks.items[0].album.artists[0].name);
                console.log("\nSong Preview: " + response.tracks.items[0].preview_url);
                console.log("\nAlbum: " + response.tracks.items[0].album.name + "\n")
        })
        .catch(function (err) {
            console.log(err);
        })
};

function getMovie() {
    var movieTitle = searchInput;

    if (movieTitle == "") {
        movieTitle = "Mr. Nobody"
    }

    axios.get("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            console.log("Movie Title: " + response.data.Title);
            // console.log("\n-------------\n");
            console.log("\nRelease Year: " + response.data.Year);
            // console.log("\n-------------\n");
            console.log("\nThe movie's IMDB rating is: " + response.data.imdbRating);
            // console.log("\n-------------\n");
            console.log("\nThe movie's Rotten Tomatoes rating is: " + response.data.Ratings[1].Value);
            // console.log("\n-------------\n");
            console.log("\nProduced in: " + response.data.Country);
            // console.log("\n-------------\n");
            console.log("\nLanguage: " + response.data.Language);
            // console.log("\n-------------\n");
            console.log("\nPlot: " + response.data.Plot);
            console.log("\nActors: " + response.data.Actors)
            console.log("\n----------------------------\n");
        }
    ).catch(function (err) {
        console.log(err);
    })
};

function doRandom() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
        var dataArray = data.split(", ");
        if (dataArray.length === 2) {

            commandInput = dataArray[0];
            searchInput = dataArray[1];

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
            };
        } else {
            console.log("That didn't work.")
        }
    })
}