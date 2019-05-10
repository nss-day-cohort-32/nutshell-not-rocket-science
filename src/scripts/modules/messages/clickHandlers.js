import {
  addMessagesToDOM
} from "./showMessages";
import {
  addMessage
} from "../API/messages";

export function addClickHandlers() {

  let addBtn = document.getElementById("button-message-add");
  addBtn.addEventListener("click", addMessageHandler);




}





function addMessageHandler(event) {
  let loggedInUserId = 1;

  let newMessage = buildMessageObject(event, loggedInUserId);

  return addMessage(newMessage)
    .then(addMessagesToDOM);
};



function buildMessageObject(event, userId) {
  let messageText = document.getElementById("message-textbox").value;

  return {
    feeling: "",
    message: messageText,
    postedTime: new Date().toISOString(),
    userId: userId
  };
}