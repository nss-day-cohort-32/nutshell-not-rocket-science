import api from "../API.js";


const mainDiv = document.querySelector("#main-content-area");

//login function

//this needs to be a fetch to the DB to check if the user exists. This should be an API call. If the user exists set a login token with sessionStorage.setItem(), if the user doesn't exist, make a second api call to "register" the user and write their info to the database



//Create all HTML elements


let loginDiv = document.createElement("div");
let inputForm = document.createElement("form");
let userNameInput = document.createElement("input");
let emailInput = document.createElement("input");
let passwordInput = document.createElement("input");
let signInBtn = document.createElement("button");
let registerBtn = document.createElement("button");




//Create form labels


// let usernameLabel = document.createElement("label");
// usernameLabel.htmlFor = userNameInput;
// usernameLabel.innerHTML = "Username";

// let passwordLabel = document.createElement("label");
// passwordLabel.htmlFor = passwordInput;
// passwordLabel.innerHTML = "Password";

// let emailLabel = document.createElement("label");
// emailLabel.htmlFor = passwordInput;
// emailLabel.innerHTML = "Email";

// emailInput.setAttribute("type", "email");
// passwordInput.setAttribute("type", "password");
signInBtn.innerHTML = "Sign In";

inputForm.appendChild(addInput("username", "Username", "text"));
inputForm.appendChild(addInput("email", "Email", "text"));
inputForm.appendChild(addInput("password", "Password", "text"));

// let formArray = [userNameInput, emailInput, passwordInput, signInBtn, usernameLabel, passwordLabel, emailLabel];
// formArray.forEach(element => {
//     inputForm.appendChild(element);
// });

loginDiv.appendChild(inputForm);
mainDiv.appendChild(loginDiv);


// just make a function so the text labels go where they're supposed to; called above
function addInput(inputName, inputTitle, inputType) {
    let div = document.createElement("div");
    let label = document.createElement("label");
    let input = document.createElement("input");
    input.type = inputType;
    label.htmlFor = inputName;
    label.innerHTML = inputTitle;
    input.id = inputName;
    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(signInBtn);
    return div;

}


// inputForm.addEventListener("submit", logUserIn);


