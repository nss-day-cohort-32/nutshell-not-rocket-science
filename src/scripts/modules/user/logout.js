import {
  updateOnlineStatus
} from "../API/users";
import {
  getLoggedInUser,
  removeSessionStorage
} from "../sessionStorage";

export function logout() {
  removeSessionStorage();
  return updateOnlineStatus({
    id: getLoggedInUser()
  }, false);
}