import API from "./dbCalls";

API.getData().then(data => data.forEach(taskObj => {

    if (taskObj.isComplete === false) {
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

document.addEventListener("click", function(e) {
    console.log(e);
    console.log(e.target.checked);

    let obj = {isComplete: true};
    let id = e.target.id.split("-").pop();

    if (e.srcElement.checked) {
        API.patchData(obj, id);
    }
});

document.addEventListener("click", function(e) {
    console.log(e);
    let id = e.target.id.split("-").pop();

    if (e.target.className === "taskHeader") {
        e.target.textContent ="";
        e.target.innerHTML = "<input id='newName' type='text' value='edit task' onfocus=\"this.value=''\">";

        e.target.addEventListener("keyup", function(e) {

            if (e.keyCode === 13) { // 13 is enter

                console.log("what", id);

                let input = document.querySelector("#newName").value;
                let obj = {task: `${input}`};

                API.patchData(obj, id);
            }
        });
    }
});

