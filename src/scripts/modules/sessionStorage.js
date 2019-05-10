// set session storage for logged in user
export const setSessionStorage = (user) => {
    sessionStorage.setItem("loggedInUserId", `${user.id}`);
};

// global call function for referencing current user
export const getLoggedInUser = () => {
    let userId = sessionStorage.getItem("loggedInUserId");
    return userId;
};

// remove user from session storage upon log out
export const removeSessionStorage = () => {
    sessionStorage.removeItem("loggedInUserId");
};