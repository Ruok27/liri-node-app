const env = require("dotenv").config();
const Spotify = require('node-spotify-api');
const axios = require("axios");
const fileSystem = require("fs");
const keys = require("./keys.js");




const divider = "=====================================================================================";



const findMovie = (movie = "Mr Nobody") => {

  axios.get("http://www.omdbapi.com/?t="+ movie +"&y=&plot=short&apikey=trilogy").then(
  function(response) {


    let getback = response.data;
   
    console.log(`
${divider}
Name: ${getback.Title}
Year: ${getback.Year}
IMDB rating: ${getback.imdbRating}
Rotten Tomatoes rating: ${getback.Ratings[1].Value}
Country of origin: ${getback.Country}
Language: ${getback.Language}
Plot: ${getback.Plot}
Starring: ${getback.Actors}
${divider}`);

  }
);

}

const command = process.argv[2];
const query = process.argv[3]?process.argv.slice(3).join(" "):undefined;




const findSong = (song = "The Sign ace of base") =>{

  

  // spotify-this-song   
 
 // Artist(s)
 // The song's name
 // A preview link of the song from Spotify
 // The album that the song is from
 // If no song is provided then your program will default to "The Sign" by Ace of Base.
 
 let spotify = new Spotify(keys.spotify);
 
 
 spotify.search({
   type: "track",
   query: song,
   limit: 1
 })
 .then(function(response) {
   let result = response.tracks.items;
   for (let i = 0; i < result.length; i++) {
     resultData =
 
 `
 ${divider}
 Artists: ${result[i].artists[i].name}
 
 Track:   ${result[i].name}
 
 Preview: ${result[i].preview_url}
 
 Album    ${result[i].album.name}
 ${divider}
 `
     console.log(resultData);
     
   }
 })
 .catch(function(err) {
   console.log(err);
 });
 
 
 
 
 
 }


const findConcert = (concert) => {

  // concert-this     bands in town api

// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")

let bandsintown = `https://rest.bandsintown.com/artists/pitbull/events?app_id=codingbootcamp`;
console.log(bandsintown);


axios.get(bandsintown).then(
  function(response) {

    const getback =response.data;



  const venueData = 
  `
  Venue: ${getback[0]}
  City:  ${getback[0]}
  State: ${getback[0]}
  
  `;

  console.log(venueData);




    
   
  
      console.log(response.data.venue.artistname);

    

    
  } //Disclosure that the following code is reusued from someone else to see why im having issues with this APIs 
).catch(function(err) {
  if (err.response) {
      
      console.log("---------------Data---------------");
      console.log(err.response.data);
      console.log("---------------Status---------------");
      console.log(err.response.status);
      console.log("---------------Status---------------");
      console.log(err.response.headers);
    } else if (err.request) {
      


      console.log(err.request);
    } else {


      console.log("err", err.message);
    }
    console.log(err.config);
  })};















if (command === "concert-this"){


findConcert(query);





}
else if (command === "spotify-this-song"){

findSong(query);
 
}

else if (command === "movie-this"){
findMovie(query);

}

else if (command === "do-what-it-says"){

  // do-what-it-says use fs to make the content of random.txt the fourth argument





}


else {console.log(`
******************************************************
Error: The only valid LIRI commands are the following:

concert-this [music artist]
spotify-this-song [song name]
movie-this [movie name]
do-what-it-says
******************************************************
`)}

































