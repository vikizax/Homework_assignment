"""
Homework Assignment #1
Variables

Print the details of my favorit song
"""

# name of the song
song_name = "7 Years"

# song artist
artist = "Lukas Graham"

# genre of the song
genre = "Soul-pop"

# song duration
duration_in_sec = 239.0

# release date of song as a class
class ReleaseDateOfSong:
    day = 18
    month= "September"
    year= 2015
# created obj date of class ReleaseDateOfSong
date = ReleaseDateOfSong()

# printing the details
print("Song Name: ", song_name)
print("Artist Name: ", artist)
print("Genre: ", genre)
print("Duration: ", duration_in_sec, "seconds")
print("Release Date: ", date.day, date.month, date.year)




