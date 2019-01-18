/*Homework Assigment#2
var, let, const
*/



/*What is hoisting? How does it work?
Ans:

For eg:

var a = "show";
var b = "me";
var c = "magic"

console.log(d);
var d;

Above code will run without ERROR but d is after console.log !! and it will still show "undefined"
This shows that when a variable is declared it will be hoisted on top of the code due to this hoisting.

Again:
var a = "show";
var b = "me";
var c = "magic"

console.log(d);
var d = 4;

Above code will run without error, but d is after console.log and it will still show "undefined"
Here it does not show value 4 as hoisting will only hoist the declaration on top of the code.

Again:
var a = "show";
var b = "me";
var c = "magic"

d = 4;

console.log(d);
var d;

Above code now will show the value 4 not undefined as the declartion is already hoisted on top of the code 
and d is assigned to 4 before console.log so now console.log(d) knows the value so it prints 4.

Therefore, Hoisting in javascript means that all the declaration will be hoisted on top of the code.
Hoisting is also done for named functions, etc.
*/








/*
---------------------------------------------------------------

1. use case of var:

Should be used for global declaration.
It can be re-assigned.
for eg:

var globalCount = 0;
function checkCountZero() {
    if(globalCount === 0) {
        console.log("Count Changed to 1");
        globalCount = 1;
    } else {
        console.log("Count Changed to 0");
        globalCount = 0;
    }
}
checkCountZero();

But var has scope issues.
for eg:

function saySomething() {
    var isTrue = true;
    if(isTrue){
        var name = "Rich"
        console.log(name)
    }
    console.log(name);//var name is still accessible outside the scope
}
saySomething();

In the above code  /var name/ should only be usable inside the scope of /if(isTrue){}/
but it can be still accessed outside it within the /function saySomething(){}/ scope which should not happen.  

-------------------------------------------------------------------------------------------------

2. use case for let:

It is similar to var but unlike var, let does not have scope issues as using let will be scoped 
inside that block and will not accessible outside it.
for eg:
function saySomething() {
    let isTrue = true;
    if(isTrue){
        let name = "Rich"
        console.log(name)
    }
    console.log(name);//here this will throw error 
}
saySomething();

-------------------------------------------------------------------------------------------------

->use case for const:

It can used to declare values which we don't want to re-assign but it can be mutated
It is also constant within a single execution scope.
const variable has to be assigned with value as it cannot be undefined.

for eg:
function saySomething() {
    let isTrue = true;
    const ADMIN_NAME = "Rich";

    if(isTrue){
        console.log(ADMIN_NAME);
    }
    ADMIN_NAME = "end_user_name";
    console.log(ADMIN_NAME);//here this will throw error 
}
saySomething();

 */


//IMPORTANT : READ THE COMMENT INSTRUCTIONS TO REMOVE ERROR!

//code for var 
function saySomethingForVar() {
    var globalCount = 0;
    if(globalCount === 0) {
        console.log("Count Changed to 1");
        globalCount = 1;
        var name = "Rich"
        console.log(name);
    } else {
        console.log("Count Changed to 0");
        globalCount = 0;
    }
    console.log("outside the scope: "+ name);//name is still accessable which is not good, mark it as comment
}
saySomethingForVar(); 

//code for let
function saySomethingForLet() {
    let isTrue = true;
    if(isTrue){
        let name = "Rich"
        console.log(name)
    }
    console.log(name);//1
    //mark 1 as comment to remove error as let is scoped within the block and cannot be accessed outside it.
}
saySomethingForLet();

//code for const
function saySomethingForConst() {
    let isTrue = true;
    const ADMIN_NAME = "Rich";
    const ADMIN_ARRAY = ["Rich", "Colt", "Jonas"];
    if(isTrue){
        console.log(ADMIN_NAME);
    }

    ADMIN_NAME = "end_user_name";//1
    console.log(ADMIN_NAME);//2 
    //Mark 1 and 2 as comment to run without error
    //using 1 and 2 will throw error as const cannot be re-assigned

    ADMIN_ARRAY.push("Rita");//3
    console.log(ADMIN_ARRAY);//4
    //3 and 4 will this not throw error as const can be mutated.
}
saySomethingForConst(); 