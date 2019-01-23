"""
Homework Assignment #2 
Functions
Prints the details of the song using functions
"""

# returns name of the song
def songName():
    SongName = "7 Years"
    return SongName
    
# returns name of the artist 
def artist():
    Artist = "Lukas Graham"
    return Artist
# returns song genre 
def genre():
    Genre = "Soul-pop"
    return Genre
    
# returns recommendation boolean
def recommend():
    WillRecommend = True
    return WillRecommend

# it will call the the fuctions and print the values returned
def printAll():
    print("Song Name:", songName())
    print("Artist:", artist())
    print("Genre:", genre())
    print("I recommend this song:", recommend())

# calling printAll function
printAll()


