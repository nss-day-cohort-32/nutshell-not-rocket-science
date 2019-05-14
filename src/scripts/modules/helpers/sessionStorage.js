// set session storage for logged in user
export const setSessionStorage = (user) => {
    sessionStorage.setItem("loggedInUserId", user.id);
    sessionStorage.setItem("loggedInUserName", user.userName);
    sessionStorage.setItem("loggedInUserPhoto", user.userPhoto);

};

// global call function for referencing current user
export const getLoggedInUser = () => {
    console.log(sessionStorage);
    if (sessionStorage.hasOwnProperty("loggedInUserId")) {
        let user = {
            id: sessionStorage.getItem("loggedInUserId"),
            userName: sessionStorage.getItem("loggedInUserName"),
            userPhoto: sessionStorage.getItem("loggedInUserPhoto")
        };
        return user;
    } else return false;
};

// remove user from session storage upon log out
export const removeSessionStorage = () => {
    sessionStorage.clear();
};