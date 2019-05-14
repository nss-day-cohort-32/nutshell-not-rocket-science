import {
  getUser,
  updateOnlineStatus
} from "../API/users";
import {
  setSessionStorage
} from "../helpers/sessionStorage";
import {
  showMain
} from "../show/showMain";
import {
  getNewUserData
} from "./register";


export function doLogin(userFromRegister) {
  let user;
  if (userFromRegister) user = userFromRegister;
  else user = getNewUserData();
  console.log(user);


  try {
    Promise.all([
        getUser(`?userName=${user.userName}`),
        getUser(`?email=${user.email}`)
      ])
      .then(
        authMethods => {
          let output = authMethods.find(method => {
            if (method.length === 0) return false;
            return method[0].password === user.password;
          });
          if (output === undefined) throw "Invalid username/password";
          return output[0];
        })
      .then(user => updateOnlineStatus(user, true))
      .then(setSessionStorage)
      .then(showMain);
  } catch (e) {
    handleLoginErrors(e);
  }
}








function handleLoginErrors(message) {
  console.log(message);
}