// import API from "./modules/API.js";
// import "./modules/tasks/dbCalls";
// import "./modules/tasks/tasksMain";
// import "./modules/tasks/taskList";
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


//  Hard coding a fetch call with the 'Carly' user for now.
getUserFromID(1)
  .then(user => {
    setSessionStorage(user);
    showMain(user);
  });

// To work on the welcome screen, comment out the above fetch call
// and replace with:

//  showWelcome();



// // Final code should look like this:
// if (!getLoggedInUser()) {
//   showWelcome();
// } else {
//   showMain();
// }
