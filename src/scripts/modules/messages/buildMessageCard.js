import {
  getLoggedInUser
} from "../helpers/sessionStorage";




export function buildMessageCard(message) {
  let article = document.createElement("article"),
    authorTools = "",
    addFriend = "",
    loggedInUser = getLoggedInUser();
  article.setAttribute("data-timeStamp", message.postedTime);
  article.classList.add("message");
  article.id = `message--${message.id}`;


  if (message.userId === loggedInUser.id) {
    authorTools = `
    <div class="message--icon-container">
      <ion-icon name="create" id="message--edit--${message.id}"></ion-icon>
    </div>
    <div class="message--icon-container">
      <ion-icon name="trash" id="message--delete--${message.id}"></ion-icon>
    </div>
  `;
    article.classList.add("message-fromMe");
  } else {
    addFriend = `<div class="message-plus-icon" id="message-add-friend-${message.userId}"><ion-icon name="add-circle-outline"></ion-icon></div>`;
  }
  let messageTime = new Date(message.postedTime * 1000).toLocaleString(
    "en-US", {
      hour: "numeric",
      hour12: true,
      minute: "2-digit"
    }

  );
  article.innerHTML = `
    <div class="message-text-div">
      <p>${message.message}</p>
      ${authorTools}
    </div>
    <div class="message-tools">
      <aside class="message-author">
        ${message.user.userName} ${addFriend}
      </aside>
      <aside class="message-time">
        ${messageTime}
      </aside>
    </div>
  `;
  return article;
}