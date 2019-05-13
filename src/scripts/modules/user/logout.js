import {
  updateOnlineStatus
} from "../API/users";
import {
  getLoggedInUser,
  removeSessionStorage
} from "../helpers/sessionStorage";

export function logout() {
  removeSessionStorage();
  return updateOnlineStatus(getLoggedInUser(), false);
}