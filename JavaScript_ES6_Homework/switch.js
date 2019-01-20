/*
Homework Assignment #5
Switch Statements
*/

//value(n) should be +integer >0
//label(n) should accept any following strings:
//"seconds", "minutes", "hours", "days",
//"second", "minute", "hour", "day"

const timeAdder = (value1, label1, value2, label2) => {
    //will be used generating the time in seconds from value1 and value2
    let time1 ;
    let time2 ;
    
    //will be used to store the final result as array or boolean
    let result;

    //function exp with switch case for singular
    const evaluateValue = (label)=> {
        switch(label){
            case "second":
                return 1;
            case "minute":
                const min = 60;
                return min;
            case "hour":
                const hr = 3600;
                return hr;
            case "day":
                const day = 86400;
                return day;
            default: 
                return "invalid";         
        }
    }

    //function exp with switch case for plural
    const evaluateValues = (label, value)=> {
        switch(label){
            case "seconds":
                return value;
            case "minutes":
                const mins = value * 60;
                return mins;
            case "hours":
                const hrs = value * 3600;
                return hrs;
            case "days":
                const days = value * 86400;
                return days;
            default: 
                return "invalid";
        }
    }
   
    //check for invalid input
    if((typeof value1 !== "number")||(typeof value2 !== "number")){
        console.log("I am here");
        result = false;
    } else {
        //check for plural or singular
         if((value1 > 0) && (value2 > 0)){
            //check for different way of value input
            if((value1 === 1) && (value2 === 1) ){
            time1 = evaluateValue(label1);
            time2 = evaluateValue(label2);
            }else if((value1 > 1) && (value2 > 1)){
                    time1 = evaluateValues(label1, value1);
                    time2 = evaluateValues(label2, value2);
            } else if((value1 > 1) && (value2 === 1)){
                    time1 = evaluateValues(label1, value1);
                    time2 = evaluateValue(label2);
            } else if((value2 > 1) && (value1 === 1)){
                    time1 = evaluateValue(label1);
                    time2 = evaluateValues(label2, value2);
            } else {
                    console.log("Ops I should not be here! Something went wrong please check your input!");
        }
        // result = [time1, time2];
    
        //check if any input results invalid, else generate result
        if((time1 === "invalid")||(time2 === "invalid")){
            result = false;
        } else {
            //result will now contain the time in seconds
            result = [time1, time2];
            //it will store the total time in seconds
            let count = 0;
            //calculating total time in seconds
            result.forEach((num) =>{ 
                count += num;
            });

            //setting up total seconds as day,hours, or seconds
            if(count % 86400 === 0){
                const label3 = "days";
                const value3 = count / 86400;
                result = [value3, label3];
            } else if(count % 3600 === 0) {
                const label3 = "hours";
                const value3 = count / 3600;
                result = [value3, label3];
            } else if(count % 60 === 0) {
                const label3 = "minutes";
                const value3 = count / 60;
                result = [value3, label3];
            } else {
                const label3 = "seconds";
                result = [count, label3];
            }
        }
    } else {
        result = false;
    }
}
    //it will return array or boolean false if any invalid input is given!
    return result;
}

//Use below to test!!: 

//it will return: [1,"day"] rather than [24,"hours"]
console.log(timeAdder(20,"hours",4,"hours"));

//some more test case:
console.log(timeAdder(1,"day",24,"hours"));
console.log(timeAdder(2,"minutes",10,"hours"));

//Use below to check for return false!!:

// console.log(timeAdder( {}, "seconds",{}, "seconds"));
// console.log(timeAdder(5,"hour",5,"minutes"));
// console.log(timeAdder(false,false,5,"minutes"));
// console.log(timeAdder({},"days",5,"minutes"));
