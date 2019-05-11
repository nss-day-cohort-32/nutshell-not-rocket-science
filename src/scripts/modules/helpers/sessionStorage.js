// set session storage for logged in user
export const setSessionStorage = (user) => {
    sessionStorage.setItem("loggedInUser", user);
};

// global call function for referencing current user
export const getLoggedInUser = () => {
    if (sessionStorage.hasOwnProperty("loggedInUser")) {
        let user = sessionStorage.getItem("loggedInUser");
        return user;
    } else return false;
};

// remove user from session storage upon log out
export const removeSessionStorage = () => {
    sessionStorage.removeItem("loggedInUser");
};