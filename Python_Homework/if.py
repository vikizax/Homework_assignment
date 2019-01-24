"""
Homework Assignment #3 
"If" Statements
"""

# function to compare 3 inputs
def compare(x,y,z):
    # value input will be taken as int and compared
    if int(x) == int(y) or int(x) == int(z):
        return True
    elif int(y) == int(z):
        return True
    else:
        return False 

# printing results
Answer = compare(0,1,1)
print(Answer)

Answer = compare("1","1","1")
print(Answer)

Answer = compare(0,1,0)
print(Answer)

Answer = compare(2,"2",1)
print(Answer)

Answer = compare(3,1,2)
print(Answer)

Answer = compare(0,0,0)
print(Answer)

Answer = compare("0",1,1)
print(Answer)

Answer = compare("0","1",1)
print(Answer)

Answer = compare("0",2,"1")
print(Answer)