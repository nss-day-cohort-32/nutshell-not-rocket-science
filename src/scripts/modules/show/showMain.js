import {
  getLoggedInUser
} from "../helpers/sessionStorage";
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
import {
  addSidebarEventHandler
} from "../sidebarEventHandler";

export function showMain() {

  // show main site if user is logged in.
  let user = getLoggedInUser();
  let root = document.querySelector("#root");
  root.innerHTML = "";
  showSidebar(user, root);
  let rootInner = buildDOMElement("div", root, null, null, ["root-inner"]);
  rootInner.appendChild(showHeader(user));
  let wrapper = buildDOMElement("div", rootInner, null, null, ["wrapper", "flex-container"]);
  buildDOMElement("div", wrapper, "Hello world", "main-content-area", ["main"]);

  // TODO: Activate article page
  addSidebarEventHandler();
}