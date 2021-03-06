import {
  showArticles
} from "./articles/Articles";

import {
  addListHTMLToDOM
} from "./tasks/tasksMain";
import {
  showMessages
} from "./messages/showMessages";
import {
  showEditModal
} from "./articles/editModal";

import {
  addEvents
} from "./events/eventsMain";
import {
  showEvents
} from "./events/eventsList";

export function addSidebarEventHandler() {
  let sidebar = document.getElementById("sidebar");

  sidebar.addEventListener("click", switchboard);
}

function switchboard(event) {
  let target = event.target.id;
  if (target !== "") {
    let split = target.split("-");
    if (split[0] === "link") handleLinkClick(split[2]);

    // TODO: handle friend action clicks.
  }
}

export function handleLinkClick(linkType) {
  let msg =
    "Replace the console.log located in the 'sidebarEventHandler.js' file with the function call to show your content";
  document.getElementById("main-content-area").innerHTML = "";
  switch (linkType) {
    case "articles":
      setActiveLink("articles");
      showArticles();
      break;

    case "tasks":
      setActiveLink("tasks");
      console.log("tasks", msg);
      addListHTMLToDOM();
      break;

    case "events":
      setActiveLink("events");

      addEvents();
      showEvents();
      break;

    case "messages":
      setActiveLink("messages");
      showMessages();

      break;
  }
}

function setActiveLink(activeLink) {
  let links = document.querySelectorAll(".sidebar-main-link");
  links.forEach(link =>
    link.classList.remove("sidebar-active", "pure-menu-selected")
  );
  let newActive = document.getElementById(`link-show-${activeLink}`);
  newActive.classList.add("sidebar-active", "pure-menu-selected");
}