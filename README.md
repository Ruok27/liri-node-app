###Overview

This is a simple a node.js application that I have wrote to demonstrate the ability utilize APIs. This App gathers information about either a music track, a movie, or a concert. Additionally, it will be able to run these commands if they are written in a txt.   

###Application structure
The app is dependent on the following packages: env, Axios and Spotify. 
There are several functions that either use Axios to ‘get’ response data from bandsintown or OMDB’s APIs, or in Spotify’s case its own package. Conditionals are used to detect which command the user would like to use and its respective function is called. The Spotify and movie function have their own default query if none is typed after the user command. 

###Instructions
After cloning repo, on the command line type npm I to download this app’s dependencies  
The following commands are accepted: 
node liri.js concert-this [music artist]
node liri.js spotify-this-song [song name]
node liri.js movie-this [movie name]
node liri.js do-what-it-says

note: for do-what-it-says, must have located in the folder’s root a txt file named random.txt. Within that file must be a command and query separated by a ',' 


###Images of application in use

<img src="movie.PNG"/>

<img src="spotify.PNG"/>

