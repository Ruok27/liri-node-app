const env = require("dotenv").config();
const Spotify = require('node-spotify-api');
const axios = require("axios");
const fileSystem = require("fs");
const keys = require("./keys.js");


const command = process.argv[2];
const query = process.argv[3];

if (command === "concert-this"){


  // concert-this     bands in town api

// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")





axios.get("https://rest.bandsintown.com/artists/" + "Nickelback" + "/events?app_id=codingbootcamp").then(
  function(response) {
    // Then we print out the imdbRating
    console.log(response.outputData);
  }
);





}
else if (command === "spotify-this-song"){



  // spotify-this-song   

// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// If no song is provided then your program will default to "The Sign" by Ace of Base.

let spotify = new Spotify(keys.spotify);


spotify.search({
  type: 'track',
  query: query
 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
 console.log(data.tracks.items[0]); 
// console.log(data.tracks.items[0]); 
// console.log(data.tracks.items[0]); 
// console.log(data.tracks.items[0]); 
});





}

else if (command === "movie-this"){


  // movie-this      omdb needs axios for api no package needed default to Mr nobody

// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.
// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


axios.get("http://www.omdbapi.com/?t="+ query +"&y=&plot=short&apikey=trilogy").then(
  function(response) {
   

    console.log("The movie's rating is: " + response.data.imdbRating);
    // console.log("The movie's rating is: " + response.data.imdbRating);
    // console.log("The movie's rating is: " + response.data.imdbRating);
    // console.log("The movie's rating is: " + response.data.imdbRating);
    // console.log("The movie's rating is: " + response.data.imdbRating);
    // console.log("The movie's rating is: " + response.data.imdbRating);
  }
);





}

else if (command === "do-what-it-says"){

  // do-what-it-says use fs to make the content of random.txt the fourth argument





}


else {console.log(`
Error: The only valid LIRI commands are the following:

concert-this [music artist]
spotify-this-song [song name]
movie-this [movie name]
do-what-it-says

`)}

































