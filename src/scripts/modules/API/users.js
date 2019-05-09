

const users = "http://localhost:8088/users";


module.exports = {
  registerNewUser: function () {
    let user = getInputData();

    checkUnique(user)
      .then(user => {
        if (typeof(user) === "string") {
          // User already exists!
          //  TODO: Display message on DOM.
          console.log(user);
        }
        else {
          postNewUserToDatabase(user)
            .then(
              module.exports.authAndLoginUser
            );
        }
      });
  },
  authAndLoginUser: function (user) {

  if (user === undefined) user = getInputData();

  authenticate(user)
    .then(signIn);

  }
};


function checkUnique(user) {
  return Promise.all(
      getUser(`?userName=${user.userName}`),
      getUser(`?email=${user.email}`)
    )
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

function getInputData() {

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


function getUser(params) {
  return fetch(`${users}${params}`)
    .then(response => response.json());
}

function postNewUserToDatabase(newUserObject) {
  return fetch(`${users}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(newUserObject)
  })
  .then(response => response.json());
}


function authenticate(input) {

  return Promise.all([
    getUser(`?userName=${input.userName}`),
    getUser(`?email=${input.email}`)
  ])
    .then(
      authMethods => {
        let output = authMethods.find(method => {
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
    // Complete login tasks, switch view to main app
  }
}





function createNewUserObject(userName, email, password, userPhoto) {
  return {
    userName: userName,
    email: email,
    password: password,
    isOnline: false,
    userPhoto: userPhoto
  };
}







