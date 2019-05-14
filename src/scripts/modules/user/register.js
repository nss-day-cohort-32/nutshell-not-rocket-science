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
    //  Check for existing user
    Promise.all([
        getUser(`?userName=${newUserData.userName}`),
        getUser(`?email=${newUserData.email}`)
      ])
      .then(matchingUsers => {
        if (matchingUsers[0].length > 0) throw "username already exists!";
        if (matchingUsers[1].length > 0) throw "email already exists!";
        else return newUserData;
      })
      .then(addNewUser)
      .then(doLogin);

  } catch (e) {

    handleExistingUser(e);

  }
}




export function getNewUserData() {

  //  TODO: get data from login/register fields
  let inputData = {
    userName: document.getElementById("inputUsername").value,
    email: document.getElementById("inputEmail").value,
    password: document.getElementById("inputPassword").value,
    isOnline: false,
    userPhoto: ""
  };
  return inputData;
}





function handleExistingUser(message) {
  // User already exists!
  //  TODO: Display message on DOM.
  console.log(message);
}