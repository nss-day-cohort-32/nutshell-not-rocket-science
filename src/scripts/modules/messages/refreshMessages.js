import {
  buildMessageCard
} from "./buildMessageCard";
import {
  fetchMessages
} from "../API/messages";

export function refreshMessages() {
  let div = document.getElementById("msg-div");
  fetchMessages().then(handleMessages);

}



export function showInitialMessages() {
  let div = document.getElementById("msg-div");
  div.innerHTML = "";
  fetchMessages().then(handleMessages);
}




function handleMessages(messages) {
  let div = document.getElementById("msg-div"),
    fragment = document.createDocumentFragment();
  div.innerHTML = "";
  messages.forEach(message => {
    let card = buildMessageCard(message);
    fragment.appendChild(card);
  });
  div.appendChild(fragment);
}