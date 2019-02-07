/*
Homework Assignment #4 
Functions
 */

 /*
All men are mortal
Socrates is a man
Therefore, socrates is mortal.
 */


const namesArray = ["Socrates","Nicolas Flamel","Zusudra"];

const isMortal = (name) => {
    if(name === ("Socrates" || "Plato")){
        return true;
    } else {
        return false;
    }
}

namesArray.forEach((name) => {
    console.log(name + " is mortal ?: " + isMortal(name));
});

console.log("\n");

/*--------------------------------Cake Flavor!------------------------------- */

//cakes we have
const cakes = ["vanilla", "chocolate", "lemon"];

//function exp to check cake is chocolate, it will return boolean array
const checkChocolate = (cakeArr) => {
    const isChocolate = [] ;
    //our cake will be checked,if chocolate then push true else false
    cakeArr.forEach((n) => {
        if(n === "chocolate") {
            isChocolate.push(true);
        } else {
            isChocolate.push(false);
        }
    });
    return isChocolate;
};

//function exp to Check all the cakes we have and return the actual flavor
//1. An array of all cake possibilities.
//2. A boolean representing whether or not the cake is chocolate.
//It returns the string indicating actual flavor of the cake
const checkAllCakes = (cakeArr, checkChoco) => {
    checkChoco.forEach((n, i) => {
        if(n){
            console.log("This cake is chocolate!!");
        }
        else{
            console.log("This cake is not chocolate, it is " + cakeArr[i]);
        }
    })
}
checkAllCakes(cakes, checkChocolate(cakes));