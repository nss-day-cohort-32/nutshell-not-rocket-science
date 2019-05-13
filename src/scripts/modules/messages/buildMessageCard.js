export function buildMessageCard(message) {
  let article = document.createElement("article"),
    authorTools = "";
  article.setAttribute("data-timeStamp", message.postedTime);
  article.classList.add("message");
  article.id = `message--${message.id}`;

  // if message.userId = logged in user...
  authorTools = `
    <div class="message--icon-container">
      <ion-icon name="create" id="message--edit--${message.id}"></ion-icon>
    </div>
    <div class="message--icon-container">
      <ion-icon name="trash" id="message--delete--${message.id}"></ion-icon>
    </div>
  `;
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
        ${message.user.userName}
      </aside>
      <aside class="message-time">
        ${messageTime}
      </aside>
    </div>
  `;
  return article;
}