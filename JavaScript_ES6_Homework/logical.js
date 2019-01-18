/*
Homework Assignment #3
Statements and Operators
 */


 /*
 All men are mortal
 Socrates is a man
 Therefore, socrates is mortal.
 */

 //object for men
 const men = {
     type: "man",
     isMortal: true
 };

 //object for socrates
 const socrates = {
     type: "man",
 };

//check type of men and are they mortal
 if(men.type === "man" && men.isMortal){
    console.log("All men are mortal");
    //check if socrates is a man
    if(socrates.type === "man"){
        console.log("Socrates is a man.");
        //socrate is a man, assign socrates is mortal
        socrates.isMortal = men.isMortal;
        // check if socrates is mortal
        if(socrates.isMortal) {
            console.log("Therefore, socrates is mortal.");
        }
    }
 }
 
 console.log("\n");
/*
This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla.
*/

//type of we have cake
const ourCake = "vanilla";
//check if cake is vanilla or chocolate 
if((ourCake) === ("vanilla" || "chocolate")) {
    console.log("Cake is either vanilla or chocolate.");
    //check if cake is chocolate
    if(ourCake === "chocolate"){
        console.log("This cake is chocolate.")
    } else {
        console.log("This cake is not chocolate.");
        //check if cake is vanilla
        if(ourCake === "vanilla") {
            console.log("Therefore, this cake is vanilla");
        }
    }
}
