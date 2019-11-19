let env = require("dotenv").config();

let fileSystem = require("fs");
var keys = require("./keys.js");
let spotify = new Spotify(keys.spotify);



//TODO


//Spotify is not defined
// concert-this     bands in town api

// spotify-this-song     spotify needs api default to "The Sign" by Ace of Base

// movie-this      omdb needs axios for api no package needed default to Mr nobody

// do-what-it-says use fs to make the content of random.txt the fourth argument


const axios = require("axios");


axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // Then we print out the imdbRating
    console.log("The movie's rating is: " + response.data.imdbRating);
  }
);
