"""
Homework Assignment #7
Dictionaries and Sets

"""
# global
# song dictionary
FavoritSong = {
    "SongName" : "7 Years", 
    "Artist" : "Lukas Graham",
    "Genre" : "Soul-pop",
    "DurationInSec" : "239 seconds",
    "ReleaseDateOfSong": "18.09.2015",
    "Recommend": "True"
    }

# loop to print the song details from dictionary 
for key, value in FavoritSong.items():
    print(key, ":", value)

print()

# function to check guess value of any key in the dictionary
def checkGuess(key,value):
    if(key in FavoritSong and value == FavoritSong[key]):
        return True
    else:
        return False

# function to take input from the user
def guess():
    key = input("Guess the Key: ")
    value = input("Guess the Key Value: ")
    if(checkGuess(key,value) is True):
        print("\nCorrect !")
    else:
        print("\nWrong! ")

guess()

