    //Fuction to return validation msg value for user name
    function nameValidate(name) {
        if(name === ""){
            return 1;
        } else if((name.length < 2) || (name.length >20)) {
            return 2;
        } else if(!isNaN(name)){
            return 3;
        } else {
            return 4;
        }
    }

    //get value to display validation msg for first name
    const fn = nameValidate(userVFname);
    if(fn !== 4) {
        switch(fn){
            case 1: sFNameHelp.innerText = "Please enter the First Name";
                break;
            case 2: sFNameHelp.innerText = "Name length must be between 2 and 20";
                break;
            case 3: sFNameHelp.innerText = "Name cannot be a number!"
                break; 
        }
        sFNameHelp.classList.remove("hide");
        return false;
    } else {
        sFNameHelp.classList.add("hide");
    }


    //get value to display validation msg last name
    const ln = nameValidate(userVLname)
    if(ln !== 4) {
        switch(ln){
            case 1: sLNameHelp.innerText = "Please enter the Last Name";
                break;
            case 2: sLNameHelp.innerText = "Name length must be between 2 and 20";
                break;
            case 3: sLNameHelp.innerText = "Name cannot be a number!"
                break; 
        }
        sLNameHelp.classList.remove("hide");
        return false;
    } else {
        sLNameHelp.classList.add("hide");
    }   
    

    //Function to display validation msg for password
    function passValidate(p) {
        sPassHelp.classList.remove("hide");
        if(p === "") {
            sPassHelp.innerText = "Please enter the Password";
            return false;
        } else if(p.length <= 4 ) {
            sPassHelp.innerText = "Password length must be greater than 4";
            return false;
        } else {
            sPassHelp.classList.add("hide");
        }      
    }
    const passCheck = passValidate(userVPassword);
    if(!passCheck){
        return false;
    }

    //Fuction to display validation msg for email
    function emailValidate(m) {
        sEmailHelp.classList.remove("hide");
        if(m === "") {
            sEmailHelp.innerText = "Please enter the email";
            return false;
        } else if(m.indexOf("@") <= 0) {
            sEmailHelp.innerText = "Invalid position of '@' ";
            return false;
        } else if((m.charAt(m.length - 4) !== ".") && (m.charAt(m.length - 3) !== ".")) {
            sEmailHelp.innerText = "Invalid position of '.' ";
            return false;
        }else {
            sEmailHelp.classList.add("hide");
        }
    }
    const emailCheck = emailValidate(userVEmail);
    if(!emailCheck){
        return false;
    }
    //validate the checkbox
    if(userVCheck === false) {
        sCheckHelp.innerText = "Agree to terms and condition";
        sCheckHelp.classList.remove("hide");
        return false;
    } else {
        sCheckHelp.classList.add("hide");
    }
    return true;

