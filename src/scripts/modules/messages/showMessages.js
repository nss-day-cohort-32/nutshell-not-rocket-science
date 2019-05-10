import {
  addClickHandlers
} from "./clickHandlers";
import {
  fetchMessages
} from "../API/messages";
import { buildMessageBox } from "./buildMessageBox";




export function showMessages() {
  buildMessageBox();

  addClickHandlers();

  //  Not the most efficient way to do this,
  //  but it will work for now...
  addMessagesToDOM();
  setInterval(addMessagesToDOM, 10000);
}




export function addMessagesToDOM() {
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




function buildMessageCard(message) {
  let article = document.createElement("article"),
    authorTools = "";

  article.classList.add("message");
  article.id = `message--${message.id}`;

  // if message.userId = logged in user...
  authorTools = `
    <ion-icon name="create"></ion-icon>
    <ion-icon name="trash"></ion-icon>
  `;
  let messageTime = new Date(message.postedTime).toLocaleString(
    "en-US", {
      hour: "numeric",
      hour12: true,
      minute: "2-digit"
    }

  );
  article.innerHTML = `
    <p>${message.message}</p>
    <div class="message-tools">
      <aside class="message-author">
        ${message.user.userName}<span>${authorTools}</span>
      </aside>
      <aside class="message-time">
        ${messageTime}
      </aside>
    </div>
  `;
  return article;
}





