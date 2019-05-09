import { Endpoint } from "./API";

/*
Usage of users function...

Call with:
users.register(user)
user.doLogin(user)




*/




const users = new Endpoint("http://localhost:8088/users");

module.exports.users = {
  register: register,
  doLogin: doLogin
};


function register(user) {
  //  Make dummy user to test function
  user = makeUserObject("Carly", "BobMarley@carly.com", "carly");

  checkUnique(user)
    .then(user => {
      if (typeof(user) === "string") {
        console.log(user);
      }
      else {
        return users.create(user);
      }
    });


}



function doLogin() {

  let user = makeUserObject("Carly", "BobMarley@carly.com", "carly");
  authenticate(user)
    .then(signIn);


}

function checkUnique(user) {
  let promises = [
    users.read(`?userName=${user.userName}`),
    users.read(`?email=${user.email}`)
    ];
    return Promise.all(promises)
      .then(matchingUsers => {
        if (matchingUsers[0].length > 0) {
          return "Username already exists!";
        }
        if (matchingUsers[1].length > 0) {
          return "Email already exists!";
        }
        else return user;
      });
}

function authenticate(input) {
  let userName = users.read(`?userName=${input.userName}`),
  email = users.read(`?email=${input.email}`);

  return Promise.all([userName, email])
    .then(
      authMethods => {
        let output = authMethods
          .find(method => {
            console.log(method);
            if (method.length === 0) return false;
            return method[0].password === input.password;
          });
        if (output === undefined) {
          return "Invalid username/password";
        } else return output[0];
        });



}


function signIn(user) {
  if (typeof(user) === "string") console.log(user);
  else {
    // Complete login tasks
  }
}





function makeUserObject(userName, email, password, userPhoto) {
  return {
    userName: userName,
    email: email,
    password: password,
    isOnline: false,
    userPhoto: userPhoto
  };
}







