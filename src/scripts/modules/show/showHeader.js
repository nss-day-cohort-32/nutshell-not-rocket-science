import {
  buildDOMElement
} from "../helpers/buildDOMElement";
import {
  logout
} from "../user/logout";
import {
  showWelcome
} from "./showWelcome";

export function showHeader(user) {
  let fragment = document.createDocumentFragment();
  let header = buildDOMElement("header", fragment, null);
  let innerDiv = buildDOMElement("div", header, null, null, ["header-inner-div"]);
  buildDOMElement("h3", innerDiv, `What's Up ${user.userName}?`);
  let linkDiv = buildDOMElement("div", innerDiv, null, null, ["header-link-div"]);
  let logoutLink = buildDOMElement("a", linkDiv, "Log out", "logout-link");

  logoutLink.addEventListener("click", (event => {
    logout()
      .then(showWelcome);
  }));

  return fragment;
}