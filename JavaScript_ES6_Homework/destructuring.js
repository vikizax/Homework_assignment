/*
Homework Assignment #10
Destructuring 
*/

//Difference between destructuring an object and destructuring an array?
/*
=>
Destructuring Object:
We use an object literal on the left-hand-side of an assignment expression for object destructuring.
for example:

const nameObj = {
    firstName: "John",
    lastName: "Doh"
}
const {firstName, lastName} = nameObj;

=>
Destructuring Array:
We use an array literal on the left-hand-side of an assignment expression.
for example:

const sampleArray = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = sampleArray;


=>
In Object Destructuring ,
If we dont use var, let, or const
for example:
{firstName, lastName} = nameObj;

In the above statement,
Destructuring object literal will be taken to be a block statement, 
which will lead to an error because a block cannot appear at the 
left-hand-side of an assignment expression.
To avoid this we need to wrap it in (),
({firstName, lastName} = nameObj);

This is not a problem for Array Destructuring,
[x,y,z] = sampleArray;
console.log(x, y, z) //1 2 3
Above satatement will be executed without any issue

=>
In Object Destructuring,
We have to use the property name which should match with the property name of
the object to which it is assigned.

const nameObj = {
    firstName: "John",
    lastName: "Doh"
}
const {firstName, lastName} = nameObj;

If not then it will be undefined.

For Array Destructuring this is not a problem.
We can use any variable name and assign it to the desired array.

[x, y, z] = sampleArray;

If we want to use differet name rather than the original in Object destructruing,
we can do it by,

const {firstName: fn, lastName: ln} = nameObj;
console.log(fn,ln) //John Doh

=>
In Array Destructuring ,
values are assigned in sequence,

const sampleArray = [1, 2, 3, 4, 5];
[x, y, z] = sampleArray;
here x, y, z will be sequentially assigned to the values of the sampleArray
that is 1, 2, 3

This is not the case for Object destructuring 
Property name will assigned to the value with the matching property name in the object only.

const nameObj = {
    firstName: "John",
    lastName: "Doh"
}
const {firstName, lastName} = nameObj;
console.log(firstName, lastName);
const {lastName, firstName} = nameObj;
console.log(firstName, lastName);

Both output will be same // John Doh 
i.e firstName value will remail "John" and lastName value will remain "Doh" even if they switch 
there positions while assigning.
*/


//Use Case of Object Destructuring and Array Destructuring
/*
=>
In case of Array:

let myArray = [1, 2, 3, 5, 6]
We want to assign values 1, 2, 3 to a new variable

We can do it by
const var1 = myArray[0];
const var2 = myArray[1];
const var3 = myArray[2];

But this process is lengthy
Array Destructuring will better for this case,

[var1, var2, var3] = myArray;
here var1, var2, var3 will be assigned to the values 1, 2, 3 

Compared to old way, destructuring is more convenient 


=>
In case of Object

Say we have a function to create an object:

function createNewObj(prop1, prop2, prop3, prop4) { 
    const obj = {
        prop1 = prop1,
        prop2 = prop2,
        prop3 = prop3,
        prop4 = prop4
    }
    return obj;
}
const oldObj = {
    prop1: "1",
    prop2: "2",
    prop3: true,
    prop4: false,
    prop5: 1,
    prop6: 2
}
console.log(createNewObj(oldObj.prop1, oldObj.prop2, oldObj.prop3, oldObj.prop4));

Here in the above function,
we have repeate the process of assigning the prop(n) to the respective again and again
This process gets lengthy if there will be more.

In this case we can use Object Destructuring
Above code can be re-written as:

function createNewObj({prop1, prop2, prop3, prop4}) { 
    const obj = {
        prop1,
        prop2,
        prop3, 
        prop4
    }
    return obj;
}
const oldObj = {
    prop1: "1",
    prop2: "2",
    prop3: true,
    prop4: false,
    prop5: 1,
    prop6: 2
}
console.log(createNewObj(oldObj));

 */

//Destructuring Nested Objects and Arrays

//nested object
const studentResult = {
    name: "Nita",
    marks: {
        maths: 78,
        english: 85
    },
    contact: [
        {
            phoneNumber: 1234567890,
            email: "nita@gmail.com"
        }, 
        {
            phoneNumber: 0987654321,
            email: "nita12@gmail.com"
        }
    ]
}

//above nested object can be desturectured as:

// const {name, marks, contact} = studentResult;
// console.log(name, marks, contact); //marks and contact will be directly printed as stored

//if we want to acess  marks individually and acess phoneNumber, we can do it as
// const  {name,marks:{maths, english}, contact:[{phoneNumber}]} = studentResult;
// console.log(maths, phoneNumber);
//this now print the maths marks and phoneNumber of the student but only the first matched phoneNumber will be printed

//to get all the contact details 
// const  {name,marks:{maths, english}, contact} = studentResult;
// //we can also loop through contact details as
// for({phoneNumber: p, email: e} of contact) {
//     console.log(p, e);
// }


//nested Array
const myArray= [
    ["apple", "stawberry", "banana"],
    [1, 2, 3, 4, 5],
    ["John", "Colt", "Nita", "Alice"],
    6,
    7
];

//destructuring nested array

[a, b, c, d, e] = myArray;
console.log(a,b,c,d,e);// nested values will be printed all together

//we can  can loop over nested values as
for(const name of a) {
    console.log(name);
}
for(const value of b) {
    console.log(value);
}
for(const name of c) {
    console.log(name);
}

// to access them individually:
[[x,y,z], [p,q,r], [aa,bb,cc], dd, ee] = myArray;

console.log(x, y, z);
console.log(p, q, r);
console.log(aa, bb, cc);

