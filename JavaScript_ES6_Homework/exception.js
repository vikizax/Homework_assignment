/*
Homework Assignment #11
Exceptions
*/

// Function exp to take JSON-stringified version of a Javascript Array and return reverse 
const reverseJsonArray = (n) => {
    try {
        const arr = JSON.parse(n);
        arr.reverse();
        return JSON.stringify(arr);
    } catch {
        return false;
    }
}


console.log(reverseJsonArray('["cat","ball","apple"]'));            // apple ball cat
console.log(reverseJsonArray('["1","2","3"]'));                     // 3 2 1
console.log(reverseJsonArray(123));                                 // false
console.log(reverseJsonArray());                                    // false 
console.log(reverseJsonArray('[]'))                                 // []
console.log(reverseJsonArray(true));                                // false
console.log(reverseJsonArray([1, 2, 3]));                           // false   
console.log(reverseJsonArray('["a"]'));                             // a
console.log(reverseJsonArray('["a","b","c","d"]'));                 // d c b a 
console.log(reverseJsonArray('["a","b","c","d","1"]'));             // 1 d c b a 
console.log(reverseJsonArray(true, false, true));                   // false
console.log(reverseJsonArray(1,2,3,4,5,6));                         // false   
console.log(reverseJsonArray(reverseJsonArray('["q","w","r"]')));   // q w r

