import listAPI from "./taskDbCalls";
import {
  displayTaskList
} from "./taskList";
import {
  getLoggedInUser
} from "../helpers/sessionStorage";

export function addTaskEventListener() {
  const main = document.querySelector("#main-content-area");

  main.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target);
    if (e.target.id === "addTaskBtn") {
      document.querySelector(".taskForm").classList.remove("hidden");
    } else if (e.target.id === "postTaskBtn") {
      const taskNameInput = document.querySelector("#taskNameInput");
      const taskCompletionInput = document.querySelector("#taskCompletionInput");
      let taskName = taskNameInput.value;
      let taskComplete = taskCompletionInput.value;
      let user = getLoggedInUser();

      // example object to populate database
      let userObj = {
        isComplete: false,
        expectedCompletion: `${taskComplete}`,
        userId: `${user.id}`,
        task: `${taskName}`
      };

      listAPI.postData(userObj).then(displayTaskList);

    } // function to update database objects from uncompleted to complete
    else if (e.target.checked) {
      let obj = {
        isComplete: true
      };
      let id = e.target.id.split("-").pop();
      listAPI.patchData(obj, id).then(displayTaskList);
    } else if (e.target.className === "taskHeader") {
      // allows a user to edit the names of their tasks in the DOM, which updates the database object
      let id = e.target.id.split("-").pop();
      let headerVal = e.target.textContent;
      e.target.innerHTML = `<input type='text' id="new" value='${headerVal}'>`;
      e.target.addEventListener("keyup", function (e) {

        if (e.keyCode === 13) { // 13 is enter
          let input = document.querySelector("#new").value;
          let obj = {
            task: `${input}`
          };

          listAPI.patchData(obj, id).then(displayTaskList);
        }
      });
    };
  });
}