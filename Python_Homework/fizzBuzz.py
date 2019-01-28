"""
Homework Assignment #5
Basic Loops
"""

# function to check for prime
def checkPrime(i):
    for n in range(2, i, 1):
        # if n is divisible by any other number than 1 and itself = not prime
        if i % n == 0:
            # return false for not prime
            return False
        else:
            # return true for Prime
            return True

# loop to iterate from 1 to 100
for i in range(1,101,1):
    # check for fizzbuzz
    if i % 5 == 0 and i % 3 == 0:
        print("FizzBuzz")
    # check for Buzz or if i is 5 buzz prime
    elif i % 5 == 0:
        if(i == 5):
            print("Buzz Prime")
        else:
            print("Buzz")
    #check for Fizz or if i is 3 fizz prime 
    elif i % 3 == 0:
        if(i == 3):
            print("Fizz Prime")
        else:
            print("Fizz")
    # if not fizz buzz, check for prime
    else:
        # if i is 2 = prime
        if(i == 2):
            print("Prime")
        # check for i > 2 is prime?
        else:
            IsPrime = checkPrime(i) 
            if(IsPrime):
                print("Prime")
            # if not fizz buzz and prime then print just i
            else:
                print(i)
        


