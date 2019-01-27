const signUp = document.getElementById("signUp");
const sFName = signUp.querySelector("#sFName");
const sLName = signUp.querySelector("#sLName");
const sEmail = signUp.querySelector("#sEmail");
const sPass = signUp.querySelector("#sPass");
const sCheck = signUp.querySelector("#sCheck");
const sBtnSign = signUp.querySelector("button");
const mySignUpForm = signUp.querySelector("#mySignUpForm");
const sFNameHelp = mySignUpForm.querySelector("#sFNameHelp");
const sLNameHelp = mySignUpForm.querySelector("#sLNameHelp");
const sEmailHelp = mySignUpForm.querySelector("#sEmailHelp");
const sPassHelp = mySignUpForm.querySelector("#sPassHelp");
const sCheckHelp = mySignUpForm.querySelector("#sCheckHelp");


// Fuction exp for form validation
const validateSignUp = ()=> {
    
    //5 means valid, 0 means invalid
    let validNum = 0;
    
    //get values from the fields
    const userVFname = sFName.value;
    const userVLname = sLName.value;
    const userVEmail = sEmail.value;
    const userVPassword = sPass.value;
    const userVCheck = sCheck.checked;
    
    //remove hide from validation msg display
    sFNameHelp.classList.remove("hide");
    sLNameHelp.classList.remove("hide");
    sEmailHelp.classList.remove("hide");
    sPassHelp.classList.remove("hide");
    sCheckHelp.classList.remove("hide");

    //validate user first name
    if(userVFname === "") {
        sFNameHelp.innerText = "Please enter the First Name";   
    } else if((userVFname.length < 2) || (userVFname.length >20)) {
        sFNameHelp.innerText = "Name length must be between 2 and 20";
    } else if(!isNaN(userVFname)) {
        sFNameHelp.innerText = "Name cannot be a number!";
    } else {
        //hide the validation msg for first name
        sFNameHelp.classList.add("hide");
        validNum += 1;
    }

    //validate user last name
    if(userVLname === "") {
        sLNameHelp.innerText = "Please enter the First Name";   
    } else if((userVLname.length < 2) || (userVLname.length >20)) {
        sLNameHelp.innerText = "Name length must be between 2 and 20";
    } else if(!isNaN(userVLname)) {
        sLNameHelp.innerText = "Name cannot be a number!";
    } else {
        //hide the validation msg for last name
        sLNameHelp.classList.add("hide");
        validNum += 1;
    }

    //validate user Email
    if(userVEmail === "") {
        sEmailHelp.innerText = "Please enter the email";
    } else if(userVEmail.indexOf("@") <= 0) {
        sEmailHelp.innerText = "Invalid position of '@' ";
    } else if((userVEmail.charAt(userVEmail.length - 4) !== ".") && (userVEmail.charAt(userVEmail.length - 3) !== ".")) {
        sEmailHelp.innerText = "Invalid position of '.' ";
    }else {
        //hide the validation msg for email
        sEmailHelp.classList.add("hide");
        validNum += 1;
    }

    //validate password
    if(userVPassword === "") {
        sPassHelp.innerText = "Please enter the Password";
    } else if(userVPassword.length <= 4 ) {
        sPassHelp.innerText = "Password length must be greater than 4";
    } else {
        //hide the validation msg for password
        sPassHelp.classList.add("hide");
        validNum += 1;
    } 

    //validate checkbox
    if(userVCheck === false) {
        sCheckHelp.innerText = "Agree to terms and condition";
    } else {
        //hide the validation msg for checkbox
        sCheckHelp.classList.add("hide");
        validNum += 1;
    }

    //check validNum to return true or false
    if(validNum > 4) {
        return true;
    } else {
        return false;
    }
}

//adding event listener to the signup form
mySignUpForm.addEventListener("submit", (e)=> {
    //prevent default action of submit
    e.preventDefault();
    //validity check, true or false
    const checkValid = validateSignUp();
    console.log(checkValid);
});