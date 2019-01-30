// global
let userKey = [];

//jumbotron
const jumbotron = document.querySelector(".jumbotron");

//note- use class hide to hide the selection
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

//note- use class active to show them as active 
//dashboard page
const dashboard = document.getElementById("dashboard");
const btnAccount = dashboard.querySelector("#btnAccount");
const btnLogOut = dashboard.querySelector("#btnLogOut");
const navbarBrand = dashboard.querySelector("#userStats");
const listEmptyMsg = dashboard.querySelector("#listEmptyMsg");
const createToDoMenu = dashboard.querySelector("#createToDoMenu");
const dashCreateToDo = dashboard.querySelector("#dashCreateToDo a");
const dashCurrentToDo = dashboard.querySelector("#dashCurrentToDo a");
const userCurrentList = dashboard.querySelector("#userCurrentList");
const todo = dashboard.querySelector("#todo");
const toDoAdd = dashboard.querySelector("#toDoAdd");
const toDoUndo = dashboard.querySelector("#toDoUndo");
const toDoCreate = dashboard.querySelector("#toDoCreate");
const listTodoItem = todo.querySelector("#listTodoItem");
const toDoListName = createToDoMenu.querySelector("#toDoListName");
const userList = userCurrentList.querySelector("#userList");

//note- use class hide to hide or display
//account setting page
const accountSetting = document.getElementById("accountSetting");
const myAccountForm = accountSetting.querySelector("#myAccountForm");
const aFName = myAccountForm.querySelector("#aFName");
const aFNameHelp = myAccountForm.querySelector("#aFNameHelp");
const aLName = myAccountForm.querySelector("#aLName");
const aLNameHelp = myAccountForm.querySelector("#aLNameHelp");
const aEmail = myAccountForm.querySelector("#aEmail");
const aEmailHelp = myAccountForm.querySelector("#aEmailHelp");
const aNPass = myAccountForm.querySelector("#aNPass");
const aNPassHelp = myAccountForm.querySelector("#aNPassHelp");
const aOPass = myAccountForm.querySelector("#aOPass");
const aOPassHelp = myAccountForm.querySelector("#aOPassHelp");
const btnCancel = myAccountForm.querySelector("#cancel");


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

    //checkthe value returned for the key is null or not
    if( checkKey === null) {
        return true;
    }else {
        return false;
    }
}

//Fucntion exp to display the user created list 
const displayUserTodoList = () => {
    const displayObj = JSON.parse(localStorage(userKey[0]));
}

// Function exp to append the list name in the user created lists
const appendListName = (obj, n)=> {
    listEmptyMsg.classList.add("hide");
    const currentList = userList;
    if(n === 1){
        const currentLi = document.createElement("li");
        currentLi.className= "list-group-item";
        currentLi.innerText = obj.todo[obj.todo.length-1].name;
        currentList.appendChild(currentLi);
    } else {
        for(const prop of obj.todo){
            const currentLin = document.createElement("li");
            currentLin.className= "list-group-item";
            currentLin.innerText = prop.name;
            currentList.appendChild(currentLin);
        }
    }
}

// Function exp to bring up dashboard
const dashboardPage = ()=> {
    signUp.classList.add("hide");
    userCurrentList.classList.remove("hide")
    dashCurrentToDo.classList.add("active");
    dashCreateToDo.classList.remove("active");
    createToDoMenu.classList.add("hide");
    dashboard.classList.remove("hide");
    logIn.classList.add("hide");
    jumbotron.classList.add("hide");
    const currentUserObj = JSON.parse(localStorage.getItem(userKey[0]));
    if(currentUserObj.todo !== undefined) {
        appendListName(currentUserObj);
    }else {
        listEmptyMsg.classList.remove("hide");
    }
    navbarBrand.innerText = "Welcome " + currentUserObj.firstName + "!";
}

// Function exp bring startUp page
const startUpPage = () => {
    jumbotron.classList.remove("hide");
    startUp.classList.remove("hide");
    dashboard.classList.add("hide");
    resetCreateTodo();
    userKey.pop();
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
const validateForm = ()=> {
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


// Function exp to validate the account setting form
const validateAccSettingForm = () => {

    //5 means valid, 0 means invalid
    let validAccNum = 0;
    
    //get values from the fields
    const userAFname = aFName.value;
    const userALname = aLName.value;
    const userAEmail = aEmail.value;
    const userAOPassword = aOPass.value;
    const userANPassword = aNPass.value;
    
    //remove hide from validation msg display
    aFNameHelp.classList.remove("hide");
    aLNameHelp.classList.remove("hide");
    aEmailHelp.classList.remove("hide");
    aOPassHelp.classList.remove("hide");
    aNPassHelp.classList.remove("hide");
    //validate user first name
    if(userAFname === "") {
        aFNameHelp.innerText = "Please enter the First Name";   
    } else if((userAFname.length < 2) || (userAFname.length >20)) {
        aFNameHelp.innerText = "Name length must be between 2 and 20";
    } else if(!isNaN(userAFname)) {
        aFNameHelp.innerText = "Name cannot be a number!";
    } else {
        //hide the validation msg for first name
        aFNameHelp.classList.add("hide");
        validAccNum += 1;
    }

    //validate user last name
    if(userALname === "") {
        aLNameHelp.innerText = "Please enter the First Name";   
    } else if((userALname.length < 2) || (userALname.length >20)) {
        aLNameHelp.innerText = "Name length must be between 2 and 20";
    } else if(!isNaN(userALname)) {
        aLNameHelp.innerText = "Name cannot be a number!";
    } else {
        //hide the validation msg for last name
        aLNameHelp.classList.add("hide");
        validAccNum += 1;
    }

    //validate user Email
    if(userAEmail === "") {
        aEmailHelp.innerText = "Please enter the email";
    } else if(userAEmail.indexOf("@") <= 0) {
        aEmailHelp.innerText = "Invalid position of '@' ";
    } else if((userAEmail.charAt(userAEmail.length - 4) !== ".") && (userAEmail.charAt(userAEmail.length - 3) !== ".")) {
        aEmailHelp.innerText = "Invalid position of '.' ";
    }else {
        //check if the new email is already used or not
        const newEmail = uniqueMailCheck(userAEmail);
        //if new mail is not already used
        if(newEmail) {
            //hide the validation msg for email
            aEmailHelp.classList.add("hide");
            validAccNum += 1;
        } else {
            //if the new mail provided already used by someone
            alert("Email already used!");
            aEmail.value = "";
            aOPass.value = "";
        }       
    }

    //creating user obj get the details from the localStorage
    const accObj = JSON.parse(localStorage.getItem(userKey[0]));
    //get the user password
    const oldPass = accObj.password;

    //check if the old password provide is correct 
    if(userAOPassword === oldPass){
        aOPassHelp.classList.add("hide");
        validAccNum += 1;
    } else {
        if(userAOPassword === "") {
            aOPassHelp.innerText = "Please enter the Password";
        } else {
            aOPassHelp.innerText = "Incorrect Password!";
        }
    }
    // validate password
    if(userANPassword === "") {
        aNPassHelp.innerText = "Please enter the Password";
    } else if(userANPassword.length <= 4 ) {
        aNPassHelp.innerText = "Password length must be greater than 4";
    } else {
        //hide the validation msg for password
        aNPassHelp.classList.add("hide");
        validAccNum += 1;
    } 

    //check validAccNum to return true or false
    if(validAccNum > 4) {
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
    //if 1 then mySignUpForm
    const checkValid = validateForm();
    if(checkValid){
        getSignUpDetails();
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


//Fucntion exp to bring up createToDoMenu
const createToDoMenuPage = () => {
    dashCreateToDo.classList.add("active");
    dashCurrentToDo.classList.remove("active");
    userCurrentList.classList.add("hide");
    createToDoMenu.classList.remove("hide");
    todo.classList.remove("hide");
}

//adding event listener to dashboard create New To-Do
dashCreateToDo.addEventListener("click", createToDoMenuPage);

// Function exp to bring up userCurrentList
const userCurrentListPage = () => {
    dashCreateToDo.classList.remove("active");
    dashCurrentToDo.classList.add("active");
    userCurrentList.classList.remove("hide");
    createToDoMenu.classList.add("hide");
    todo.classList.add("hide");
}

//adding event listener to dashboard To-Do lists
dashCurrentToDo.addEventListener("click", userCurrentListPage);

// FUnction exp to bring up myAccountForm
const myAccountFormPage = () => {
    accountSetting.classList.remove("hide");
    dashboard.classList.add("hide");
}

// adding event listener to the btnAccount
btnAccount.addEventListener("click", myAccountFormPage);

// Function exp to update the user account details
const updateAccountDetails = () => {

    //get values from the fields
    const userUFname = aFName.value;
    const userULname = aLName.value;
    const userUEmail = aEmail.value;
    const userUNPassword = aNPass.value;

    //creating user obj get the details from the localStorage
    const accObj = JSON.parse(localStorage.getItem(userKey[0]));
    //deleting from localStorage
    localStorage.removeItem(userKey[0]);
    //updating details obtained from the account setting form
    accObj.firstName = userUFname;
    accObj.lastName = userULname;
    accObj.password = userUNPassword;
    //remove the old key
    userKey.pop();
    //store the updated details in the localStorage
    const accObjString = JSON.stringify(accObj);
    localStorage.setItem(userUEmail, accObjString);
    //set the new key
    userKey.push(userUEmail);
    //reset the account setting form after update
    myAccountForm.reset();
    //hide the form after update 
    accountSetting.classList.add("hide");
    //send the user back to dashbord after update
    dashboardPage();
}
//adding event listener to the myAccountForm
myAccountForm.addEventListener("submit", (e) => {
    //prevent default action of submit
    e.preventDefault();
    //validity check, true or false
    const checkAValid = validateAccSettingForm();
    if(checkAValid){
        updateAccountDetails();
    }
});

//adding event listener to the cancel button in the account setting form
btnCancel.addEventListener("click",()=> {
    accountSetting.classList.add("hide");
    dashboardPage();
});

// Function exp to add new to-do
const createNewToDos = () => {
    //create new list element
    const newTodo = document.createElement("li");
    //set the class
    newTodo.className = "list-group-item";
    //create new input element
    const newTodoInput = document.createElement("input");
    //set the type as text field
    newTodoInput.type = "text";
    //show the create button
    toDoCreate.classList.remove("hide");
    //attach the newly created elements to it respective place
    newTodo.appendChild(newTodoInput);
    listTodoItem.appendChild(newTodo);
}

// Function exp to undo the createNewToDos
const undoNewTodos = () => {
    //get the list
    const parentE = listTodoItem;
    //remove the child if child is not null
    if(parentE.lastChild !== null){
        parentE.removeChild(parentE.lastChild);
    }else {
        //at last hide the create button
        toDoCreate.classList.add("hide");
    }
}
//Funciton exp to check for unique list name
const uniqueListName = (n)=> {
    //get the data for the user key from localStorage
    const todoCheck = JSON.parse(localStorage.getItem(userKey[0]));
    //check for n = 1
    if(n !== 1) {
        for(const prop of todoCheck.todo) {
            //if the name matches return false
            if(prop.name === n) {
                return false;
            }
        }
    }
    //default return
    return true;
}

// Function exp to create and save the to-do list
const createNewToDoList = () => {
    //use to check for update the localStorage or not
    // 1 means update it, 2 for not
    let updateFlag = 1;
    //get all the input fields from all the li elements
    const inputLi = listTodoItem.querySelectorAll("li input");
    const todoObj = JSON.parse(localStorage.getItem(userKey[0]));
    let addCheck;
    if(todoObj.todo === undefined) {
        todoObj.todo = [];
        addCheck = uniqueListName(1);
    }else {
        addCheck = uniqueListName(toDoListName.value);
    }
    const obj = {
        item:[]
    };
    //Only if there is 1 or more input fields
    if(inputLi.length > 0) {
        //loop thorough all the input fields
        for(const prop of inputLi){
            //check if not empty
            if(prop.value !== "") {
                //alert if the list name is not given alert
                if(toDoListName.value === ""){
                    alert("Give a name to your To-Do list!");
                    break;
                }else {
                    //if the given list name is unique
                    if(addCheck) {
                        obj.name = toDoListName.value;
                        obj.item.push(prop.value);

                    }else {
                        //change the flag to 0 for not meeting all the conditions
                        updateFlag = 0;
                        //alert
                        alert("List name already exist! Add unique name!");
                        break;
                    }
                }
            }else {
                updateFlag = 0;
                alert("Add something in todo");
                break;
            }
        }
    }else {
        updateFlag = 0;
        alert("Add a todo before creating!");
    }
    //check if the all consdition satisfied(1), else false(0)
    if(updateFlag) {
        //update the localStoage
        todoObj.todo.push(obj);
        localStorage.setItem(userKey[0],JSON.stringify(todoObj));
        //alert after success
        alert("List added!");
        //reset the fields
        resetCreateTodo();
        //display the name in the user current to do lists
        appendListName(todoObj, 1);
    }
}

//Function exp to reset createNewToDos
const resetCreateTodo = () => {
    //get the list
    const parentRE = listTodoItem;
    //hide the create button
    toDoCreate.classList.add("hide");
    //if there is child element remove it
    while (parentRE.firstChild) {
        parentRE.removeChild(parentRE.firstChild);
    }
    //reset the field taking name for todo list
    toDoListName.value = "";
}

//adding event listener to add todo list button in dashboard page
toDoAdd.addEventListener("click", createNewToDos);
//adding event listener to undo button in dashboard page
toDoUndo.addEventListener("click", undoNewTodos);
//adding event listener to the toDoCreate button in the dashboard
toDoCreate.addEventListener("click", createNewToDoList);
