



export function buildMessageBox() {
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


}





function addMessageInputBox() {
  let messageInputDiv = document.createElement("div");
  messageInputDiv.classList.add("message-input-box");
  messageInputDiv.innerHTML = `
    <input type="text" placeholder="Add a message" id="message-textbox"></input>
    <button id="button-message-add" class="button"><ion-icon name="add"></ion-icon></button>`;
  return messageInputDiv;
}

