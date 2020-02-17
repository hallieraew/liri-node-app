var axios = require("axios");
var moment = require("moment");

var bandName = process.argv[2];
// We then run the request with axios module on a URL with a JSON
axios.get("https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp").then(
  function(response) {
    console.log("Venue: " + response.data.Venue);
    console.log("\n-------------\n");
    // console.log("Venue Location: " + response.data.); need to look at json data to determine what field
    console.log("\n-------------\n");
    // console.log("Date of Event: " + response.data.); need moment in here read docs
    console.log("\n-------------\n");
  }
);

