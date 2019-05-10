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
// let registerBtn = document.createElement("button");

emailInput.setAttribute("type", "email");
passwordInput.setAttribute("type", "password");

let formArray = [userNameInput, emailInput, passwordInput, signInBtn];
formArray.forEach(element => {
    inputForm.appendChild(element);
});

loginDiv.appendChild(inputForm);
mainDiv.appendChild(loginDiv);

// inputForm.addEventListener("submit", logUserIn);

