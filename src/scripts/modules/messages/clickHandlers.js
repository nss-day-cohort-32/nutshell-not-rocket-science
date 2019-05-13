import {
  showNewMessages,
  showInitialMessages
} from "./showMessages";
import {
  addMessage,
  deleteMessage
} from "../API/messages";
import {
  refreshMessages
} from "./refreshMessages";
import {
  showEditModal
} from "./editModal";
import {
  getLoggedInUser
} from "../helpers/sessionStorage";

const moment = require("moment");


export function addClickHandlers() {

  let addBtn = document.getElementById("button-message-add");
  addBtn.addEventListener("click", addMessageHandler);

  let textBox = document.getElementById("message-textbox");
  textBox.addEventListener("keyup", function (event) {
    console.log(event);
    if (event.keyCode === 13) {
      console.log("enter detected");
      addMessageHandler(event);
    }
  });

  let innerContainer = document.getElementById("msg-div");
  innerContainer.addEventListener("click", containerClickHandler);

}



function containerClickHandler(event) {
  let idSplit = event.target.id.split("--");
  if (idSplit[1] === "edit") showEditModal((event.target.id));
  if (idSplit[1] === "delete") deleteButtonHandler(idSplit[2]);
}




function addMessageHandler(event) {
  let user = getLoggedInUser();
  let newMessage = buildMessageObject(event, user.id);

  addMessage(newMessage)
    .then(showInitialMessages);
};


function deleteButtonHandler(id) {
  deleteMessage(id)
    .then(refreshMessages);
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