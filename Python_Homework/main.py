"""
Homework Assignment #1
Variables

Print the details of my favorit song
"""

# name of the song
SongName = "7 Years"

# song artist
Artist = "Lukas Graham"

# genre of the song
Genre = "Soul-pop"

# song duration
DurationInSec = 239.0

# release date of song as a class
class ReleaseDateOfSong:
    day = 18
    month= "September"
    year= 2015
# created obj date of class ReleaseDateOfSong
date = ReleaseDateOfSong()

# printing the details
print("Song Name: ", SongName)
print("Artist Name: ", Artist)
print("Genre: ", Genre)
print("Duration: ", DurationInSec, "seconds")
print("Release Date: ", date.day, date.month, date.year)




