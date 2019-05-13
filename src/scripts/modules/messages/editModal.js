import {
  buildDOMElement
} from "../helpers/buildDOMElement";
import {
  editMessage
} from "../API/messages";
import {
  showInitialMessages
} from "./refreshMessages";
showInitialMessages;

export function showEditModal(editButtonId) {
  let msgId = editButtonId.split("--")[2];
  let article = document.querySelector(`#message--${msgId}`);
  let body = document.querySelector("body");
  let outerDiv = buildDOMElement("div", body, null, `${editButtonId}-modal`, ["modal-container"]);
  let currentText = article.querySelector("p").textContent;
  outerDiv.innerHTML = drawModal(currentText);
  outerDiv.addEventListener("click", (event => {
    event.preventDefault();
    let targetId = event.target.id;
    if (targetId === "closeModal" || targetId === "closeModalDiv") cancelClickHandler(outerDiv);
    if (targetId === "button-amend") amendClickHandler(editButtonId, outerDiv);
  }));

}


function amendClickHandler(editId, outerDiv) {
  let id = editId.split("--")[2],
    inputText = document.getElementById("message-edit-text").value;
  editMessage(id, {
      message: inputText
    })
    .then(() => {
      outerDiv.remove();
      showInitialMessages();
    });


}


function cancelClickHandler(outerDiv) {
  outerDiv.remove();
}


function drawModal(currentText) {
  return `
  <div class="modal-content">
    <form action="" class="pure-form modal-inner">
      <legend>
        <div class="modal-header">
          <span class="modal-title">Edit Message</span>
          <div id="closeModalDiv" class="modal-icon-close">
            <ion-icon id="closeModal" name="close"></ion-icon>
          </div>
        </div>
      </legend>
      <input id="message-edit-text" type="text" value="${currentText}">
      <button id="button-amend" type="submit" class="pure-button pure-button-primary">Amend</button>
    </form>
  </div>`;

}