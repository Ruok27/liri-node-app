const axios = require("axios");
const fs = require("fs");
// divider will be used as a spacer between the tv data we print in log.txt
const divider = `
------------------------------------------------------------
`;
​
// findShow takes in the name of a tv show and searches the tvmaze API
// By default, if no search type is provided, search for a tv show
const findShow = (show = "Andy Griffith show") => {
  console.log("Searching for TV Show");
  const URL = `http://api.tvmaze.com/singlesearch/shows?q=${show}`;
​
  axios.get(URL).then(response => {
    // Place the response.data into a variable, jsonData.
    const jsonData = response.data;
    // showData ends up being the string containing the show data we will print to the console
    const showData = `
    Show: ${jsonData.name}
    Genre(s): ${jsonData.genres.join(", ")}
    Rating: ${jsonData.rating.average}
    Network: ${jsonData.network.name}
    Summary: ${jsonData.summary}
    `;
​
    // Append showData and the divider to log.txt, print showData to the console
    fs.appendFile("log.txt", showData + divider, err => {
      if (err) throw err;
      console.log(showData);
    });
  });
};
​
// findActor takes in the name of an actor to search for
// By default, if no search term is provided, search for "Andy Griffith"
const findActor = (actor = "Andy Griffith") => {
  console.log("Searching for TV Actor");
  const URL = `http://api.tvmaze.com/search/people?q=${actor}`;
​
  axios.get(URL).then(response => {
    // Grab the first index of the response array, access the object at the `person` key and store it in a variable.
    const jsonData = response.data[0].person;
    // actorData ends up being the string containing the show data we will print to the console
    const actorData = `
      Name: ${jsonData.name}
      Birthday: ${jsonData.birthday}
      Gender: ${jsonData.gender}
      Country: ${jsonData.country.name}
      URL: ${jsonData.url}
      `;
​
    // Append actorData and the divider to log.txt, print showData to the console
    fs.appendFile("log.txt", actorData + divider, err => {
      if (err) throw err;
      console.log(actorData);
    });
  });
};
​
// Grab search command line argument
const search = process.argv[2]?process.argv[2]:undefined;
// Joining the remaining arguments since an actor or tv show name may contain spaces
const term = process.argv[3]?process.argv.slice(3).join(" "):undefined;
// Searching for a show or actor
search === "show" ? findShow(term) : findActor(term);