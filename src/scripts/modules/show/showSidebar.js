import {
  buildDOMElement
} from "../helpers/buildDOMElement";
import { getFriendList } from "../populateFriendList";


export function showSidebar(user, parentDiv) {

  let fragment = document.createDocumentFragment();
  let sidebar = buildDOMElement("div", fragment, null, "sidebar", ["pure-menu"]);
  let linkULContainer = buildDOMElement("div", sidebar, null, null, ["main-link-div"]);
  let linkUL = buildDOMElement("ul", linkULContainer, null, null, ["main-link-ul", "pure-menu-list"]);
  let links = [
    "articles",
    "tasks",
    "events",
    "messages"
  ];

  links.forEach(link => {
    let titleCase = `${link[0].toUpperCase()}${link.slice(1)}`;
    let li = buildDOMElement("li", linkUL, null, null, ["pure-menu-item"]);
    buildDOMElement("a", li, titleCase, `link-show-${link}`, ["sidebar-main-link", "pure-menu-link"]);
  });
  buildDOMElement("div", sidebar, " ");
  buildDOMElement("span", sidebar, "My Friends", null, ["sidebar-friendList-header", "pure-menu-heading"]);
  let friendUL = buildDOMElement("ul", sidebar, null, "friendList-ul");

  getFriendList();

  fragment.appendChild(sidebar);
  parentDiv.appendChild(fragment);
}