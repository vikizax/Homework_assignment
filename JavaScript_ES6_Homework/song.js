/*Homework Assigment#1
my favorite song*/

//name of the song
var songName = "7 Years";
//song artist
var artist = "Lukas Graham";
//genre of the song
var genre = "Soul-pop";
//song duration
var durationInSec = 239;
//release date
var date =  {
    day: 18,
    month: "September",
    year: 2015
};
//song writers
var songWriters = ["Lukas Forchammer", "Stefan Forrest", "Morten Ristorp","Morten Pilegaard"]; 
var songWritersString = songWriters.join(", ");
//i recommend this song
var willRecommend = true;

//output in console
console.log("Song Name: " + songName);
console.log("Artist: " + artist);
console.log("Genre: " + genre);
console.log("Duration: " + durationInSec + "s");
console.log("Released on: ", date);
//accessing release date year
// console.log("Released Year: "+ date.year);
console.log("Song Writers: " + songWritersString);
//accessing last writer in array
// console.log(songWriters[songWriters.length - 1]);
console.log("I will recommend it: " + willRecommend);