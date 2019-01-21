/*
 Homework Assignment #6 
 loops
*/

for(let i  = 1; i <= 100; i++){

    //Function exp to check for Fizz, Buzz or FizzBuzz
    const checkFizzBuzz = (i)=>{
        if(i % 15 === 0){
            return "FizzBuzz";
        } else if(i % 5 === 0) {
            return "Buzz";
        } else if(i % 3 === 0) {
            return "Fizz";
        }else {
            return undefined;
        }
    }

    //Function exp to check prime 
    const checkPrime = (i)=>{
        //flag marks for prime as 0
        let flag = 0;

        //store half of the i (input)
        let m = i/2;
        
        //will be returned by the function to tell print number i or not
        let print = true;

        //1 is not prime
        //if i not 1 then check for other
        if(i !== 1) {
            //loop to generate value y to get i % y === 0 
            for(y = 2; y <= m; y++) {
                //takeing i and y and check i % y === 0
                if(i % y === 0){
                    //true, flag = 1 to mark not prime
                    flag = 1;
                    //get the Fizz, Buzz, or FizzBuzz for non prime number 
                    const inlineCheck = checkFizzBuzz(i);
                    //if not undefined then print inlineCheck value
                    if(inlineCheck !== undefined){
                            console.log(inlineCheck);
                            //mark print false to not print the i value
                            //as inlineCheck not undefined
                            print = false;
                    }
                    //if not prime met stop the loop
                    break;
                }
            }
            //if flag 0 then prime
            if(flag === 0){
                //get Fizz, Buzz, FizzBuzz value for prime number
                const inlineCheckForPrime = checkFizzBuzz(i);
                //print inlineCheckForPrime and prime if not undefined
                    if(inlineCheckForPrime !== undefined) {
                        console.log("Prime", inlineCheckForPrime);
                } else {
                    //inlineCheckForPrime undefined, only print prime
                    console.log("Prime");
                }
                //mark print false to not print the i value
                //as inlineCheckForPrime is not undefined and number is prime
                print = false;
            }
            //return default print value if no condition true
            return print;
        }
        //return print default if number is 1
        return print;
    };
    //invoke and get back boolen to print number i or not
    const toPrint = checkPrime(i);
    //print number i if true
    if(toPrint){
        //print the number i
        console.log(i);
    }
}
