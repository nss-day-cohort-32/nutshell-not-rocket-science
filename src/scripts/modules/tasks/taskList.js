import listAPI from "./taskDbCalls";

// function to print tasks from the database in the DOM
export const displayTaskList = () => {
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
        const taskList = document.querySelector("#taskList");
        taskList.innerHTML += taskItem;
        }
    }));
};

displayTaskList();

// function to update database objects from uncompleted to complete
document.addEventListener("click", function(e) {
    let obj = {isComplete: true};
    let id = e.target.id.split("-").pop();

    if (e.srcElement.checked) {
        listAPI.patchData(obj, id);
    }
});

// function that allows a user to edit the names of their tasks in the DOM, which updates the database object
document.addEventListener("click", function(e) {
    let id = e.target.id.split("-").pop();
    let headerVal = e.target.textContent;

    if (e.target.className === "taskHeader") {
        e.target.innerHTML = `<input id='newName' type='text' value='${headerVal}'>`;

        e.target.addEventListener("keyup", function(e) {

            if (e.keyCode === 13) { // 13 is enter
                let input = document.querySelector("#newName").value;
                let obj = {task: `${input}`};

                listAPI.patchData(obj, id);
            }
        });
    }
});

