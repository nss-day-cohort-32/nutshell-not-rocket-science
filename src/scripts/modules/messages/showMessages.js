import {
  addMessage
} from "./addMessage";

const messages = "http://localhost:8088/messages?_expand=user";



module.exports = {
  showMessages: showMessages,
  handleMessages: handleMessages,
  quitMessages: window.clearInterval
};



function showMessages() {
  buildOuterMessageArea();

  //  Not the most efficient way to do this,
  //  but it will work for now...
  handleMessages();
  setInterval(handleMessages, 10000);
}




function handleMessages(messages) {
  let div = document.getElementById("msg-div"),
    fragment = document.createDocumentFragment();
  div.innerHTML = "";
  messages.forEach(message => {
    let card = buildMessageCard(message);
    console.log(message);
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






function addMessageInputBox() {
  let messageInputDiv = document.createElement("div");
  messageInputDiv.classList.add("message-input-box");
  messageInputDiv.innerHTML = `
    <input type="text" placeholder="Add a message" id="message-textbox"></input>
    <button id="button-message-add" class="button"><ion-icon name="add"></ion-icon></button>`;
  return messageInputDiv;
}



function buildOuterMessageArea() {
  let container = document.getElementById("main-content-area"),
   msgContainer = document.createElement("div"),
   innerDiv = document.createElement("div");


  msgContainer.classList.add("message-container");
  innerDiv.classList.add("message-container--inner");
  innerDiv.id = "msg-div";

  msgContainer.appendChild(innerDiv);
  msgContainer.appendChild(addMessageInputBox());

  container.innerHTML = "";
  container.appendChild(msgContainer);

  let addBtn = document.getElementById("button-message-add");
  addBtn.addEventListener("click", addMessage);
}
