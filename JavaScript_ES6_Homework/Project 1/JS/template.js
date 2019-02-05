//global
let welcomeMsg = "Welcome to To-Do List";
let btnLogIn = "Log-In";
let btnSignup = "Sign-up";
let emailTxt = "Email";
let passTxt = "Password";
let fNameTxt = "First Name";
let lNameTxt = "Last Name";
let tAndCText = "I agree to the Terms of Use";
let btnUpdate = "Update";
let btnAccSetting = "Account Setting";
let btnLogOut = "Log Out";
let aTodoList = "Todo Lists";
let aNewTodo = "Create New To-Do";
let listName = "List Name";
let btnRename = "Rename";
let btnSave = "Save";
let btnBack = "Back";
let btnAddToDo = "Add To-Do";
let btnRemove = "Remove";
let btnCreate = "Create";
let btnCancel = "Cancel";

document.head.innerHTML = (`    
    <title>${welcomeMsg}</title>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link href="./CSS/Bootstrap/css/bootstrap.css" rel="stylesheet">
    <!-- CSS File -->
    <link rel="stylesheet" href="./CSS/app.css">`);

document.body.innerHTML = (` 
<div class="container">
    <!-- Jumbotron -->
    <div class="jumbotron">
        <h1 class="text-center text-success display-4 text-wrap">${welcomeMsg}</h1>
    </div>

    <div id="startUp" class="text-center">
        <button id="btnLog" class="btn btn-lg btn-primary">${btnLogIn}</button>
        <button id="btnSign" class="btn btn-lg btn-success">${btnSignup}</button>
    </div>

    <!-- log-in page -->
    <div id="logIn" class="hide">
        <form id="myLogInForm">
            <div class="form-group">
                <label for="lEmail">${emailTxt}</label>
                <input type="email" class="form-control" id="lEmail" aria-describedby="emailHelp" placeholder="Enter ${emailTxt}" required>
                <small id="lEmailHelp" class="form-text text-danger hide"></small>
            </div>
            <div class="form-group">
                <label for="lPass">${passTxt}</label>
                <input type="password" class="form-control" id="lPass" placeholder="Enter ${passTxt}" required>
                <small id="lPassHelp" class="form-text text-danger hide"></small>
            </div>
            <div class="form-group text-center">
                <button type="submit" class="btn btn-primary">${btnLogIn}</button>
            </div>
        </form>
    </div>

    <!-- SignUp page -->
    <div id="signUp" class="hide  mt-5">
        <form id="mySignUpForm">
            <div class="form-group">
                <label for="sFName">${fNameTxt}</label>
                <input type="text" id="sFName" class="form-control" placeholder="${fNameTxt}" >
                <small id="sFNameHelp" class="form-text text-danger hide"></small>
            </div>
            <div class="form-group">
                <label for="sLName">${lNameTxt}</label>
                <input type="text" id="sLName" class="form-control" placeholder="${lNameTxt}" >
                <small id="sLNameHelp" class="form-text text-danger hide"></small>
            </div>
            <div class="form-group">
                <label for="sEmail">${emailTxt}</label>
                <input type="text" class="form-control" id="sEmail" placeholder="${emailTxt}">
                <small id="sEmailHelp" class="form-text text-danger hide"></small>
            </div>
            <div class="form-group">
                <label for="sPass">${passTxt}</label>
                <input type="password" class="form-control" id="sPass" placeholder="${passTxt}" >
                <small id="sPassHelp" class="form-text text-danger hide"></small>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="sCheck">
                <label class="form-check-label" for="sCheck">${tAndCText}</label>
                <small id="sCheckHelp" class="form-text text-danger hide"></small>
            </div>
            <div class="form-group text-center">
                <button type="submit" class="btn btn-primary mr-3">${btnSignup}</button>
            </div>
        </form>    
</div>         
    <!-- User Account Settings -->
    <div id="accountSetting" class="hide mt-0">
        <form id="myAccountForm" class="mt-5">
            <div class="form-group">
                <label for="aFName">${fNameTxt}</label>
                <input type="text" id="aFName" class="form-control" placeholder="${fNameTxt}">
                <small id="aFNameHelp" class="form-text text-danger hide"></small>
            </div>
            <div class="form-group">
                <label for="aLName">${lNameTxt}</label>
                <input type="text" id="aLName" class="form-control" placeholder="${lNameTxt}" >
                <small id="aLNameHelp" class="form-text text-danger hide"></small>
            </div>
            <div class="form-group">
                <label for="aEmail">${emailTxt}</label>
                <input type="text" class="form-control" id="aEmail" placeholder="${emailTxt}" >
                <small id="aEmailHelp" class="form-text text-danger hide"></small>
            </div>
            <div class="form-group">
                <label for="aOPass">Old ${passTxt}</label>
                <input type="password" class="form-control" id="aOPass" placeholder="Old ${passTxt}" >
                <small id="aOPassHelp" class="form-text text-danger hide"></small>
            </div>
            <div class="form-group">
                <label for="aNPass">Enter New ${passTxt}</label>
                <input type="password" class="form-control" id="aNPass" placeholder="${passTxt}" >
                <small id="aNPassHelp" class="form-text text-danger hide"></small>
            </div>
            <div class="form-group text-center">
                <button type="submit" class="btn btn-success ">${btnUpdate}</button>
                <button id="cancel" type="button" class="btn btn-danger mr-3">${btnCancel}</button>
            </div>
        </form> 
    </div>
</div>

<!-- User DashBoard-->
<div id="dashboard" class="hide">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a id="userStats" class="navbar-brand"></a>
    <button id="btnAccount" class="btn btn-outline-success ml-auto" type="button">${btnAccSetting}</button>
    <button id="btnLogOut" class="btn btn-outline-danger ml-2" type="button">${btnLogOut}</button>
</nav>
<div class="container">
    <ul class="nav nav-tabs mt-4 mb-4">
        <li id="dashCurrentToDo" class="nav-item">
            <a class="nav-link active" href="#">${aTodoList}</a>
        </li>
        <li id="dashCreateToDo" class="nav-item">
            <a class="nav-link" href="#">${aNewTodo}</a>
        </li>
    </ul>
    <div id="userCurrentList" class="hide">
        <ul id="userList" class="list-group"></ul>
    <div id="userCurrentListItemDisplay" class="hide">
        <form class="form-inline">
            <input type="text" class="form-control form-control-sm mb-2 mr-sm-2 " id="clickedListName" placeholder="${listName}" disabled>
            <button type="button" id="rename"class="btn btn-info btn-sm py-1 ml-auto">${btnRename}</button>
        </form>
        <ul id="userCurrentListItem" class="list-group"></ul>    
        <div class="text-center">
            <button type="button" id="save" class="btn btn-success mt-2">${btnSave}</button>
            <button type="button" id="back" class="btn btn-primary mt-2">${btnBack}</button>
        </div>   
    </div>
</div>
    <div id="createToDoMenu" class="hide">
        <form class="form-inline">
            <input type="text" class="form-control mb-2 mr-sm-2" id="toDoListName" placeholder="To-Do ${listName}">
            <button type="button" id="toDoAdd" class="btn btn-info ml-auto mr-2 mb-2">${btnAddToDo}</button>
            <button type="button" id="toDoUndo" class="btn btn-danger mb-2">${btnRemove}</button>
        </form>
    </div>
    <!-- User To-Do list -->
    <div id="todo" class="text-center hide">
        <ul id="listTodoItem" class="list-group"></ul>
        <button id="toDoCreate" class="btn btn-success mt-2 text-center hide">${btnCreate}</button>
    </div>
</div>
</div>`);

startJs();