export function addSidebarEventHandler() {

  let sidebar = document.getElementById("sidebar");

  sidebar.addEventListener("click", switchboard);
}


function switchboard(event) {
  let target = event.target.id;
  console.log(target);
  if (target !== "") {
    let split = target.split("-");
    if (split[0] === "link") handleLinkClick(split[2]);


    // TODO: handle friend action clicks.
  }
}


function handleLinkClick(linkType) {
  let msg = "Replace the console.log located in the 'sidebarEventHandler.js' file with the function call to show your content";

  switch (linkType) {
    case "articles":
      setActiveLink("articles");

      console.log("articles", msg);
      break;
    case "tasks":
      setActiveLink("tasks");

      console.log("tasks", msg);

      // show tasks
      break;
    case "events":
      setActiveLink("events");

      console.log("events", msg);

      // show events
      break;
    case "messages":
      setActiveLink("messages");
      console.log("messages", msg);

      // show messages
      break;
  }


}


function setActiveLink(activeLink) {
  let links = document.querySelectorAll(".sidebar-main-link");
  links.forEach(link => link.classList.remove("active"));
  let newActive = document.getElementById(`link-show-${activeLink}`);
  newActive.classList.add("active");
}