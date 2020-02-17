// Basic Node application for requesting data from the OMDB website via axios
// Here we incorporate the "axios" npm package
var axios = require("axios");
var moveTitle = process.argv[2];
// We then run the request with axios module on a URL with a JSON
axios.get("http://www.omdbapi.com/?t=" + moveTitle +"&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // Then we print out the imdbRating
    console.log("The movie's rating is: " + response.data.imdbRating);
  }
);
