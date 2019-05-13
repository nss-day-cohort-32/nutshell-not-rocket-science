import {
  getUser,
  updateOnlineStatus
} from "../API/users";
import {
  setSessionStorage
} from "../helpers/sessionStorage";


export function doLogin(userFromRegister) {

  let user;
  if (userFromRegister) user = userFromRegister;
  else user = getUserData();



  try {
    authenticate(user)
      .then(user => updateOnlineStatus(user, true))
      .then(signIn);
  } catch (e) {
    handleLoginErrors(e);
  }
}






function authenticate(input) {

  // fetch for matching username/email (same input box)
  return Promise.all([
      getUser(`?userName=${input.userName}`),
      getUser(`?email=${input.email}`)
    ])
    .then(
      authMethods => {
        console.log(authMethods);
        let output = authMethods.find(method => {
          if (method.length === 0) return false;
          return method[0].password === input.password;
        });
        if (output === undefined) throw "Invalid username/password";
        return output[0];
      });
}






function signIn(user) {
  if (typeof (user) === "string") console.log(user);
  else {
    // Complete login tasks, switch view to main app
    updateOnlineStatus(user)
      .then(setSessionStorage);
  }
}




function handleLoginErrors(message) {
  console.log(message);
}