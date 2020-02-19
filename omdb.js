
var axios = require("axios");
var moveTitle = process.argv[2];
// We then run the request with axios module on a URL with a JSON
axios.get("http://www.omdbapi.com/?t=" + moveTitle +"&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // Then we print out the imdbRating
    console.log("Movie Title: " + response.data.moveTitle);
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
);
