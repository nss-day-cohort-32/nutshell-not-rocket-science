import {
  getUser,
  addNewUser
} from "../API/users";
import {
  doLogin
} from "./doLogin";



export function registerNewUser() {
  let newUserData = getNewUserData();

  try {
    checkForExistingUser(newUserData)
      .then(addNewUser)
      .then(doLogin);
  } catch (e) {
    handleExistingUser(e);
  }
}




function getNewUserData() {

  //  TODO: get data from login/register fields
  let inputData = {
    userName: "Carly",
    password: "carly",
    email: "carly@carly.com",
    isOnline: false,
    userPhoto: ""
  };
  return inputData;
}


function checkForExistingUser(user) {
  return Promise.all(
      getUser(`?userName=${user.userName}`),
      getUser(`?email=${user.email}`)
    )
    .then(matchingUsers => {
      if (matchingUsers[0].length > 0) throw "username already exists!";
      if (matchingUsers[1].length > 0) throw "email already exists!";
      else return user;
    });
}




function handleExistingUser(message) {
  // User already exists!
  //  TODO: Display message on DOM.
  console.log(message);
}