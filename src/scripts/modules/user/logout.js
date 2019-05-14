import {
  updateOnlineStatus
} from "../API/users";
import {
  getLoggedInUser,
  removeSessionStorage
} from "../helpers/sessionStorage";
import {
  showRegistration
} from "../users/registration";

export function logout() {
  removeSessionStorage();
  updateOnlineStatus(getLoggedInUser(), false)
    .then(showRegistration);
}