import API from "./eventsData";
import { addEvents } from "./eventsMain";

export function showEvents() {
  API.getData().then(data =>
    data.forEach((eventObj, Index, Array) => {
      let eventItem = null;
      if (!Array[Index + 1]) {
        eventItem = `
        <div class="eventItem" id="eventItem-latest">
        <h2 class="eventHeader" id="eventHeader-latest">${eventObj.event}</h2>
        <p id="date-latest" >Date: ${eventObj.date}</p>
        <p id="time-latest" >Time: ${eventObj.time}</p>
        <p id="location-latest" >Location: ${eventObj.location}</p>
        <button class="editBtn" id="editEventBtn-latest">Edit</button>
        </div>`;
      } else {
        eventItem = `
        <div class="eventItem" id="eventItem-${eventObj.id}">
        <h3 class="eventHeader" id="eventHeader-${eventObj.id}">${
          eventObj.event
        }</h3>
        <p id="date-${eventObj.id}" >Date: ${eventObj.date}</p>
        <p id="time-${eventObj.id}" >Time: ${eventObj.time}</p>
        <p id="location-${eventObj.id}" >Location: ${eventObj.location}</p>
        <button class="editBtn" id="editEventBtn-${eventObj.id}">Edit</button>
        </div>`;
      }
      let editItem = `<div class="editForm hidden" id="editDiv-${eventObj.id}">
        <label for="editName">Event Name</label>
        <input type="text" id="editNameInput-${
          eventObj.id
        }" name="editName" value="${eventObj.event}"></input><br>
        <label for="editDate">Event Date</label>
        <input type="date" id="editDateInput-${
          eventObj.id
        }" name="editDate" value="${eventObj.date}"></input><br>
        <label for="editTime">Event Time</label>
        <input type="time" id="editTimeInput-${
          eventObj.id
        }" name="editTime"  value="${eventObj.time}"></input><br>
        <label for="editLocation">Event Location</label>
        <input type="text" id="editLocationInput-${
          eventObj.id
        }" name="editLocation"  value="${eventObj.location}"></input><br>
        <button id="saveEditBtn-${eventObj.id}">Save</button>
        </div>
        `;

      const eventList = document.querySelector("#eventList");
      eventList.innerHTML += eventItem;
      eventList.innerHTML += editItem;
    })
  );

  const addEventEventListener = () => {
    const container = document.querySelector("#main-content-area");
    container.addEventListener("click", function(event) {
      let idSplit = event.target.id.split("-");
      if (idSplit[0] === "editEventBtn") {
        const editForm = document.getElementById(`editDiv-${idSplit[1]}`);
        editForm.classList.remove("hidden");
      } else if (idSplit[0] === "saveEditBtn") {
        saveUpdatedEvent(idSplit[1]);
      }
    });
  };

  addEventEventListener();
}

function saveUpdatedEvent(idToEdit) {
  let newEventObject = {
    event: document.getElementById(`editNameInput-${idToEdit}`).value,
    date: document.getElementById(`editDateInput-${idToEdit}`).value,
    time: document.getElementById(`editTimeInput-${idToEdit}`).value,
    location: document.getElementById(`editLocationInput-${idToEdit}`).value
  };

  API.patchData(newEventObject, idToEdit).then(refresh);
}

export function refresh() {
  console.log("hello");
  document.getElementById("main-content-area").innerHTML = "";
  addEvents();
  showEvents();
}
