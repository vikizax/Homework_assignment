"""
Homework Assignment #1
Variables

Print the details of my favorit song
"""

# name of the song
songName = "7 Years"

# song artist
artist = "Lukas Graham"

# genre of the song
genre = "Soul-pop"

# song duration
durationInSec = 239.0

# release date of song as a class
class ReleaseDateOfSong:
    day = 18
    month= "September"
    year= 2015
# created obj date of class ReleaseDateOfSong
date = ReleaseDateOfSong()

# printing the details
print("Song Name: ", songName)
print("Artist Name: ", artist)
print("Genre: ", genre)
print("Duration: ", durationInSec, "seconds")
print("Release Date: ", date.day, date.month, date.year)




