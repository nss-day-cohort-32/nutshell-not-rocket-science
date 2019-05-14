// import API from "./modules/API.js";

import {
  showMain
} from "./modules/show/showMain";
import {
  showWelcome
} from "./modules/show/showWelcome";
import {
  setSessionStorage,
  getLoggedInUser
} from "./modules/helpers/sessionStorage";
import {
  getUserFromID
} from "./modules/API/users";

import {
  showRegistration
} from "./modules/users/registration";

// //  Hard coding a fetch call with the 'Carly' user for now.
// getUserFromID(1).then(user => {
//   setSessionStorage(user);
//   showMain(user);
// });

// To work on the welcome screen, comment out the above fetch call
// and replace with:


// Final code should look like this:
if (!getLoggedInUser()) {
  showRegistration();
} else {
  showMain();
}