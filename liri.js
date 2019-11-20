const env = require("dotenv").config();
const Spotify = require('node-spotify-api');
const axios = require("axios");
const fileSystem = require("fs");
const keys = require("./keys.js");








let spotify = new Spotify(keys.spotify);


spotify.search({
  type: 'track',
  query: 'The Sign Ace of Base'
 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data.tracks.items[1]); 
});


//TODO


//Spotify is not defined
// concert-this     bands in town api

// spotify-this-song     spotify needs api default to "The Sign" by Ace of Base

// movie-this      omdb needs axios for api no package needed default to Mr nobody

// do-what-it-says use fs to make the content of random.txt the fourth argument





axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // Then we print out the imdbRating
    console.log("The movie's rating is: " + response.data.imdbRating);
  }
);
