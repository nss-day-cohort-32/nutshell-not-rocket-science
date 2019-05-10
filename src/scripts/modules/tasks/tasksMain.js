import API from "./dbCalls";

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

const addTaskBtn = document.querySelector("#addTaskBtn");
const taskForm = document.querySelector(".taskForm");
const taskNameInput = document.querySelector("#taskNameInput");
const taskCompletionInput = document.querySelector("#taskCompletionInput");
const postTaskBtn = document.querySelector("#postTaskBtn");

addTaskBtn.addEventListener("click", function() {
  taskForm.classList.remove("hidden");
});

postTaskBtn.addEventListener("click", function() {
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

  API.postData(userObj);

});



