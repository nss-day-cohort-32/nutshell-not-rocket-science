import {
  buildDOMElement
} from "../helpers/buildDOMElement";


export function showSidebar(user, parentDiv) {

  let fragment = document.createDocumentFragment();
  let sidebar = buildDOMElement("div", fragment, null, "sidebar");
  let linkUL = buildDOMElement("ul", sidebar, null, ["main-link-ul"]);
  let linkList = [
    buildDOMElement("li", linkUL, "Articles", "link-show-articles", ["sidebar-main-link"]),
    buildDOMElement("li", linkUL, "Tasks", "link-show-tasks", ["sidebar-main-link"]),
    buildDOMElement("li", linkUL, "Events", "link-show-events", ["sidebar-main-link"]),
    buildDOMElement("li", linkUL, "Messages", "link-show-messages", ["sidebar-main-link"])
  ];
  buildDOMElement("h4", sidebar, "My Friends", null, ["sidebar-friendList-header"]);
  let friendUL = buildDOMElement("ul", sidebar, null, "friendList-ul");

  //  TODO: Get friend list
  for (let i = 0; i < 10; i++) {
    buildDOMElement("li", friendUL, `Friend ${i}`);
  }

  fragment.appendChild(sidebar);
  parentDiv.appendChild(fragment);
}