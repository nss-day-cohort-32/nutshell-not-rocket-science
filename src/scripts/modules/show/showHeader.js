import {
  buildDOMElement
} from "../helpers/buildDOMElement";


export function showHeader(user, root) {
  let fragment = document.createDocumentFragment();

  let header = buildDOMElement("header", fragment, null);
  buildDOMElement("h3", header, user.userName);
  buildDOMElement("a", header, "Log out", "logout-link");
  root.appendChild(fragment);
}