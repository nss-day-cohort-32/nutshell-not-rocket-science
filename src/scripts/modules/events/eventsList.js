import API from "./eventsData";
export function showEvents() {
  API.getData().then(data =>
    data.forEach(eventObj => {
      let eventItem = `
        <div class="eventItem">
        <h3 class="eventHeader" id="eventHeader-${eventObj.id}">${
        eventObj.event
      }</h3>
        <p id="date-${eventObj.id}" >Date: ${eventObj.date}</p>
        <p id="time-${eventObj.id}" >Time: ${eventObj.time}</p>
        <p id="location-${eventObj.id}" >Location: ${eventObj.location}</p>
        <button class="editBtn" id="editEventBtn-${eventObj.id}">Edit</button>
        </div>
        <div class="editForm hidden">
        <label for="editName">Event Name</label>
        <input type="text" id="editNameInput" name="editName" ></input><br>
        <label for="editDate">Event Date</label>
        <input type="date" id="editDateInput" name="editDate" ></input><br>
        <label for="editTime">Event Time</label>
        <input type="time" id="editTimeInput" name="editTime" ></input><br>
        <label for="editLocation">Event Location</label>
        <input type="text" id="editLocationInput" name="editLocation" ></input><br>
        <button id="saveEditBtn">Save</button>
      </div>
        `;

      const eventList = document.querySelector("#eventList");
      eventList.innerHTML += eventItem;
    })
  );

  const editNameInput = document.querySelector("#editNameInput");
  const editDateInput = document.querySelector("#editDateInput");
  const editTimeInput = document.querySelector("#editTimeInput");
  const editLocationInput = document.querySelector("#editLocationInput");
  const editEventBtn = document.querySelector("#editEventBtn");

  const addEventEventListener = () => {
    const container = document.querySelector("#main-content-area");
    container.addEventListener("click", function(e) {
      console.log(e);
      if (e.target.className === "editBtn") {
        const editForm = document.querySelector(".editForm");
        editForm.classList.remove("hidden");
      }
    });
  };

  addEventEventListener();

  editEventBtn.addEventListener("click", function() {
    let editName = editNameInput.value;
    let editDate = editDateInput.value;
    let editTime = editTimeInput.value;
    let editLocation = editLocationInput.value;
    let userId = 7;

    let userObj = {
      userId: `${userId}`,
      event: `${editName}`,
      date: `${editDate}`,
      time: `${editTime}`,
      location: `${editLocation}`
    };

    API.patchData(userObj);
  });
}
