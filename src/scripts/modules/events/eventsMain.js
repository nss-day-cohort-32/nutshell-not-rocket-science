import API from "./eventsData";

export function addEvents() {
  const eventsHTML = `

  <h2>Events</h2>
  
  <div id="eventList"></div>

  <button id="addEventBtn">Add Event</button>

  <div class="eventForm hidden">
    <label for="eventName">Event Name</label>
    <input type="text" id="eventNameInput" name="eventName" required></input><br>
    <label for="eventDate">Event Date</label>
    <input type="date" id="eventDateInput" name="eventDate" required></input><br>
    <label for="eventTime">Event Time</label>
    <input type="time" id="eventTimeInput" name="eventTime" required></input><br>
    <label for="eventLocation">Event Location</label>
    <input type="text" id="eventLocationInput" name="eventLocation" required></input><br>
    <button id="postEventBtn">Add Your Event</button>
  </div>
  
`;

  const container = document.querySelector("#main-content-area");
  container.innerHTML = eventsHTML;

  const addEventBtn = document.querySelector("#addEventBtn");
  const eventForm = document.querySelector(".eventForm");
  const eventNameInput = document.querySelector("#eventNameInput");
  const eventDateInput = document.querySelector("#eventDateInput");
  const eventTimeInput = document.querySelector("#eventTimeInput");
  const eventLocationInput = document.querySelector("#eventLocationInput");
  const postEventBtn = document.querySelector("#postEventBtn");

  addEventBtn.addEventListener("click", function() {
    eventForm.classList.remove("hidden");
  });

  postEventBtn.addEventListener("click", function() {
    let eventName = eventNameInput.value;
    let eventDate = eventDateInput.value;
    let eventTime = eventTimeInput.value;
    let eventLocation = eventLocationInput.value;
    let userId = 7;

    let userObj = {
      userId: `${userId}`,
      event: `${eventName}`,
      date: `${eventDate}`,
      time: `${eventTime}`,
      location: `${eventLocation}`
    };

    API.postData(userObj);
  });
}
