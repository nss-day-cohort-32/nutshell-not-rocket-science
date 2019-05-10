import {
  showNewMessages,
  showInitialMessages
} from "./showMessages";
import {
  addMessage,
  deleteMessage
} from "../API/messages";
const moment = require("moment");


export function addClickHandlers() {

  let addBtn = document.getElementById("button-message-add");
  addBtn.addEventListener("click", addMessageHandler);

  let innerContainer = document.getElementById("msg-div");
  innerContainer.addEventListener("click", containerClickHandler);

}



function containerClickHandler(event) {
  let idSplit = event.target.id.split("--");
  if (idSplit[1] === "edit") editButtonHandler(idSplit[2]);
  if (idSplit[1] === "delete") deleteButtonHandler(idSplit[2]);
}




function addMessageHandler(event) {
  let loggedInUserId = 1;

  let newMessage = buildMessageObject(event, loggedInUserId);

  addMessage(newMessage)
    .then(showNewMessages);
};


function deleteButtonHandler(id) {
  console.log("delete me!");
  deleteMessage(id)
    .then(showInitialMessages);
}


function editButtonHandler(id) {
  console.log("edit me!");
}




function buildMessageObject(event, userId) {
  let messageText = document.getElementById("message-textbox").value;

  return {
    feeling: "",
    message: messageText,
    postedTime: moment().unix(),
    userId: userId
  };
}