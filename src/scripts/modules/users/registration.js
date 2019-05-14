import {
    registerNewUser
} from "../user/register";
import {
    doLogin
} from "../user/doLogin";


//import api from "../API.js";

export function showRegistration() {


    const mainDiv = document.querySelector("#root");
    mainDiv.innerHTML = "";
    window.sessionStorage.setItem("registerOrLogin", "register");
    let headerDiv = document.createElement("div");
    headerDiv.innerHTML = "<h1>What's Up??</h1>";
    headerDiv.classList.add("welcome-headline");
    mainDiv.appendChild(headerDiv);
    let loginDiv = document.createElement("div");
    loginDiv.classList.add("welcome");

    loginDiv.innerHTML = `<form class="pure-form pure-form-aligned">
    <legend><div class="welcome-legend">
        <button id="welcomeButton-register" class="welcome-header-active pure-button pure-button-disabled">Register new account</button>
        <button class="pure-button" id="welcomeButton-login">Login to existing account</button>
        </div>
    </legend>
    <fieldset>
        <div class="pure-control-group">
            <label for="name">Username</label>
            <input type="text" placeholder="Username" id="inputUsername">
        </div>

        <div class="pure-control-group">
            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="inputPassword">
        </div>

        <div class="pure-control-group">
            <label for="email">Email Address</label>
            <input type="email" placeholder="Email Address" id="inputEmail">
        </div>

            <button type="submit" class="pure-button pure-button-primary" id="welcomeButton-submit">Submit</button>
        </div>
    </fieldset>
</form>`;


    loginDiv.addEventListener("click", event => {
        event.preventDefault();
        console.log(event.target.id);
        if (event.target.id === "welcomeButton-submit") submitButtonHandler();
        if (event.target.id === "welcomeButton-register" || event.target.id === "welcomeButton-login") toggleButton();

    });
    // let formArray = [userNameInput, emailInput, passwordInput, signInBtn, usernameLabel, passwordLabel, emailLabel];
    // formArray.forEach(element => {
    //     inputForm.appendChild(element);
    // });

    mainDiv.appendChild(loginDiv);

}

function submitButtonHandler() {
    console.log("Hello from submitButtonHandler");
    let toggle = window.sessionStorage.getItem("registerOrLogin");
    if (toggle === "register") registerNewUser();
    if (toggle === "login") doLogin();
}



function toggleButton() {
    let registerButton = document.getElementById("welcomeButton-register"),
        loginButton = document.getElementById("welcomeButton-login");


    if (registerButton.classList.contains("welcome-header-active")) {
        // Switch everything to login
        console.log("setting to login");
        registerButton.classList.remove("welcome-header-active", "pure-button-disabled");
        loginButton.classList.add("welcome-header-active", "pure-button-disabled");
        window.sessionStorage.setItem("registerOrLogin", "login");

    } else {
        console.log("setting to register");
        registerButton.classList.add("welcome-header-active", "pure-button-disabled");
        loginButton.classList.remove("welcome-header-active", "pure-button-disabled");
        window.sessionStorage.setItem("registerOrLogin", "register");

    }

}