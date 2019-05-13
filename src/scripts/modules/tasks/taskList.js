import listAPI from "./taskDbCalls";

export const displayTaskList = () => {
  const taskList = document.querySelector("#taskList");
  const main = document.querySelector("#main-content-area");
  console.log(taskList);
  taskList.innerHTML = "";

  listAPI.getData().then(data => data.forEach(taskObj => {

    if (taskObj.isComplete === false) { //only shows tasks that haven't been completed
      let taskItem = `
            <div class="taskItem">
                <h3 class="taskHeader" id="taskHeader-${taskObj.id}">${taskObj.task}</h3></br>
                <p>Complete By: ${taskObj.expectedCompletion}</p></br>
                <label for="checkbox">Complete</label>
                <input type="checkbox" name="isComplete" id="checkbox-${taskObj.id}">
            </div>
        `;

      taskList.innerHTML += taskItem;
    }
  }));
<<<<<<< HEAD
};




  main.addEventListener("click", function (e) {
    if (e.target.id === "addTaskBtn") {
      document.querySelector(".taskForm").classList.remove("hidden");
    } else if (e.target.id === "postTaskBtn") {
      const taskNameInput = document.querySelector("#taskNameInput");
      const taskCompletionInput = document.querySelector("#taskCompletionInput");

      let taskName = taskNameInput.value;
      let taskComplete = taskCompletionInput.value;
      let userId = 4; //TO DO - get userId

      // example object to populate database
      let userObj = {
        isComplete: false,
        expectedCompletion: `${taskComplete}`,
        userId: `${userId}`,
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



=======

};
>>>>>>> 3a8cb604b97495af2443d45ebf5c20e28fda7d8d
