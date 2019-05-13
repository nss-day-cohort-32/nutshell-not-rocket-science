import {
  displayTaskList
} from "./taskList";
import {
  addTaskEventListener
} from "./taskEvents";




export const addListHTMLToDOM = () => {
  const tasksHTML = `

  <h2>My To Do List</h2>

  <div id="taskList"></div>

  <button id="addTaskBtn">Add a Task</button>

  <div class="taskForm hidden">
    <label for="taskName">Task Name</label>
    <input type="text" id="taskNameInput" name="taskName" required></input>
    <label for="taskCompletion">Expected Completion Date</label>
    <input type="date" id="taskCompletionInput" name="taskCompletion" required></input>
    <button id="postTaskBtn">Save Your Task</button>
  </div>

`;
  const container = document.querySelector("#main-content-area");
  container.innerHTML = tasksHTML;

  displayTaskList();
  addTaskEventListener();
};