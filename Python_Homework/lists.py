"""
Homework Assignment #4
Lists
"""
# global variables
myUniqueList = []
myLeftovers = []

# print the initial value of the lists
print(myUniqueList)
print(myLeftovers)

# function to add the items to unique list if it does not exist in the list
# and add the to the left over if it already exist in the unique list
def addToList(n):
    if n not in myUniqueList:
        myUniqueList.append(n)
        return True
    else:
        myLeftovers.append(n)
        return False

# test case  
print(addToList(1))
print(addToList(2))
print(addToList(3))
print(addToList(1))
print(addToList(3))
print(addToList(4))
print(addToList(6))
print(addToList(4))
print(addToList("a"))
print(addToList("a"))


# print the final value of the lists
print("Unique List:",myUniqueList)
print("Left Over",myLeftovers)



