"""
Homework Assignment #2 
Functions
Prints the details of the song using functions
"""

# name of the song
SongName = "7 Years"

# song artist
Artist = "Lukas Graham"

# genre of the song
Genre = "Soul-pop"

# recommend in boolean
WillRecommend = True

# get the name of the song and print it
def songName(Name):
    print("Song Name:", Name)
# get the name of the artist and print it
def artist(NameArtist):
    print("Artist:", NameArtist)
# get the song genre and print it
def genre(SongGenre):
    print("Genre:", SongGenre)
# get the recommendation boolean and print it
def recommend(check):
    print("I recommend this song:", check)

# calling the functions
songName(SongName)
artist(Artist)
genre(Genre)
recommend(WillRecommend)

