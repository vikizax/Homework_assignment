"""
Homework Assignment #6
Advanced Loops
"""

# import 
import sys
import os

# get the values for max columns and row of your terminal
columns, rows = os.get_terminal_size()
# prints the obtained values
sys.stdout.write("Your Terminal max:\ncols:{}\nrows:{}\n".format(columns,rows))

# function to create the 3x3 playing board
def createBoard(r,c):
    if(r <= rows and c <= columns):
        for row in range(r): 
            if row % 2 == 0:
                for column in range(1,c+1):
                    if column % 2 == 1:
                        if column != (c):
                            print(" ", end="")
                        else:
                            print(" ")
                    else:
                        print("|", end="")        
            else:
                print("-----")
        return True
    else:
        print("\nColumns and Rows value is greater than your terminal max width and size!")
        return False

# test case:
#create 3x3 playing board
print(createBoard(5,5))
# if the size of the r and c > terminal max width and height
print(createBoard(5000,5000))

