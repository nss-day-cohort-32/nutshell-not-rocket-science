import {
  buildDOMElement
} from "../helpers/buildDOMElement";
const moment = require("moment");


export function showEditModal(editButtonId) {
  if (editButtonId === undefined) editButtonId = "add";
  let msgId = editButtonId.split("--")[2];
  //let article = document.querySelector(`#message--${msgId}`);
  let body = document.querySelector("body");
  let outerDiv = buildDOMElement("div", body, null, `${editButtonId}-modal`, ["modal-container"]);
  //let currentText = article.querySelector("p").textContent;
  outerDiv.innerHTML = drawModal("Add");


  outerDiv.addEventListener("click", (event => {
    event.preventDefault();
    let targetId = event.target.id;
    if (targetId === "closeModal" || targetId === "closeModalDiv") cancelClickHandler(outerDiv);
    if (targetId === "button-submit-article-Add") submitClickHandler(null, outerDiv);
    if (targetId === "button-submit-article-Edit") submitClickHandler(null, outerDiv);
  }));

}


function submitClickHandler(editId, outerDiv) {
  let id;
  if (editId !== null) id = editId.split("--")[2];
  let newArticle = {
    title: document.getElementById("article-title").value,
    synopsis: document.getElementById("article-synopsis").value,
    url: document.getElementById("article-url").value,
    postedTime: moment().format("MMM Do YY, h:mm a")
  };

  console.log("Hello from submit click handler");

  if (editId === null) {
    // Add new message

  } else {
    // edit existing message

  }

  outerDiv.remove();
  // // editMessage(id, {
  // //   message: inputText
  // // })
  //   .then(() => {
  //     outerDiv.remove();
  //     showInitialMessages();
  //   });


}


function cancelClickHandler(outerDiv) {
  outerDiv.remove();
}


function drawModal(addOrEdit, editObject) {
  if (addOrEdit === "Add") {
    editObject = {
      title: "",
      url: "",
      synopsis: ""
    };
  }


  return `
  <div class="modal-content">
    <form action="" class="pure-form modal-inner pure-form-aligned">
      <legend>
        <div class="modal-header">
          <span class="modal-title">${addOrEdit} an Article</span>
          <div id="closeModalDiv" class="modal-icon-close">
            <ion-icon id="closeModal" name="close"></ion-icon>
          </div>
        </div>
      </legend>
      <div class="pure-control-group">
            <label for="name">Title</label>
            <input id="article-title" type="text" value="${editObject.title}">
        </div>
      <div class="pure-control-group">
        <label for="name">Synopsis</label>
        <input id="article-synopsis" type="text" value="${editObject.synopsis}">
    </div>
    <div class="pure-control-group">
      <label for="name">URL</label>
      <input id="article-url" type="text" value="${editObject.url}">
    </div>

      <button id="button-submit-article-${addOrEdit}" type="submit" class="pure-button pure-button-primary">${addOrEdit} Article</button>
    </form>
  </div>`;

}