// global
let userKey = [];

//jumbotron
const jumbotron = document.querySelector(".jumbotron");

//statupPage
const startUp = document.getElementById("startUp");
const btnLog = startUp.querySelector("#btnLog");
const btnSign = startUp.querySelector("#btnSign");

//loginPage
const logIn = document.getElementById("logIn");
const lEmail = logIn.querySelector("#lEmail");
const lPass = logIn.querySelector("#lPass")
const myLogInForm = logIn.querySelector("#myLogInForm");
const lEmailHelp = myLogInForm.querySelector("#lEmailHelp");
const lPassHelp = myLogInForm.querySelector("#lPassHelp");

//SignUp page
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

//dashboard page
const dashboard = document.getElementById("dashboard");
const btnAccount = dashboard.querySelector("#btnAccount");
const btnLogOut = dashboard.querySelector("#btnLogOut");
const navbarBrand = dashboard.querySelector("#userStats");



// Function Exp to bring up logIn
const logInPage =  () => {
    startUp.classList.toggle("hide");
    logIn.classList.toggle("hide");
    
}
btnLog.addEventListener("click", logInPage);

// Function exp to bring up signUp
const signUpPage = () => {
    jumbotron.classList.toggle("hide");
    startUp.classList.toggle("hide");
    signUp.classList.toggle("hide");
}
btnSign.addEventListener("click", signUpPage);

//Function to create an object
function createUserObj(fn, ln, ups){
    //user first Name
    this.firstName = fn;
    //user last name
    this.lastName = ln;
    //user password
    this.password = ups;
}

// Function exp to check for unique user Email 
const uniqueMailCheck = (mail)=> {
    //get the item using key from the local strage
    const checkKey = localStorage.getItem(mail);
    console.log(checkKey);
    //checkthe value returned for the key is null or not
    if( checkKey === null) {
        return true;
    }else {
        return false;
    }
}



// Function exp to bring up dashboard
const dashboardPage = ()=> {
    signUp.classList.add("hide");
    dashboard.classList.remove("hide");
    logIn.classList.add("hide");
    jumbotron.classList.add("hide");
    const currentUserObj = JSON.parse(localStorage.getItem(userKey[userKey.length - 1]));
    console.log(currentUserObj);
    navbarBrand.innerText = "Welcome " + currentUserObj.firstName + "!";
}

// Function exp bring startUp page
const startUpPage = () => {
    jumbotron.classList.remove("hide");
    startUp.classList.remove("hide");
    dashboard.classList.add("hide");
}

//adding event listener to the logout button
btnLogOut.addEventListener("click", startUpPage);


// Function exp to get user details from the signUp page
const getSignUpDetails = () => {

    //gettings vales from the input fields
    const userFname = sFName.value;
    const userLname = sLName.value;
    const userEmail = sEmail.value;
    const userPassword = sPass.value;
    
    //check for unique mail
    const unique = uniqueMailCheck(userEmail);

    //if unique add the user details to local storage
    if(unique === true) {
            //email as key for localStorage, add it to userKey to use it get the current user details
            userKey.push(userEmail);
            //create the user object to store the details
            const newUser = new createUserObj(userFname, userLname, userPassword);
            //convert the object to string 
            const newUserJsonString = JSON.stringify(newUser);
            //store the obj, converted as string to localStorage
            localStorage.setItem(userKey[userKey.length - 1], newUserJsonString);    
            //after succcessful signup reset the form
            mySignUpForm.reset();
            //alert the user for success
            alert("User Added");
            //after successful signup bring up the dashboard of the new user
            dashboardPage(userFname);
    } else {
        //alert if the email already used
        alert("Email aleady used!");
        //reset the email and password field
        sEmail.value = "";
        sPass.value = "";
    }
}


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
    if(checkValid){
        getSignUpDetails(e);
    }
});


// Function exp check for user logIn
const checkUserLogIn = (e) => {
    //prevent default for submit action
    e.preventDefault();
    //get email value
    const userLoginEmail = lEmail.value;
    //get value for if user exist or not
    //if return false user exist
    const userExist = uniqueMailCheck(userLoginEmail);
    console.log(userExist);
    //get password value
    const userLoginPass = lPass.value;

    //remove hide from validation msg display
    lEmailHelp.classList.remove("hide");
    lPassHelp.classList.remove("hide");

    // check password only if user exist
    if(!userExist) {
        //user exist hide the validation msg
        lEmailHelp.classList.add("hide");
        //retrive user password from the localStorage to check the validity
        const userLoginObj =JSON.parse( localStorage.getItem(userLoginEmail));
        const userLoginObjPas = userLoginObj.password;

        //check if password is correct
        if(userLoginPass === userLoginObjPas) {
            //password is correct hide the validation msg
            lPassHelp.classList.add("hide");
            userKey.push(userLoginEmail);
            //after login reset the login form
            myLogInForm.reset();
            dashboardPage();
        } else {
            //show inncorrect for wrong password
            lPassHelp.innerText = "Incorrect Password";
        }
    } else {
        //show msg if user does not exist
        lEmailHelp.innerText = "User does not exist!"
    }
}


// adding event listener to the login form
myLogInForm.addEventListener("submit", checkUserLogIn);




