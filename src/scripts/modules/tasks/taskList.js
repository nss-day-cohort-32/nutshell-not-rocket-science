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

};