import {
  getLoggedInUser
} from "../sessionStorage";
import {
  showHeader
} from "./showHeader";
import {
  showSidebar
} from "./showSidebar";
import {
  getUser
} from "../API/users";
import {
  buildDOMElement
} from "../helpers/buildDOMElement";

export function showMain() {
  console.log("show the main site");
  // show main site if user is logged in.
  let user = getLoggedInUser();

  let root = document.getElementById("root");
  showHeader(user, root);
  let wrapper = buildDOMElement("div", root, null, null, ["wrapper", "flex-container"]);
  showSidebar(user, wrapper);
  buildDOMElement("div", wrapper, null, "main-content-area", ["main"]);

  // TODO: Activate article page

}