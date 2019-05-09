import {
  handleMessages
} from "./showMessages";





module.exports.addMessage = function (event) {
    loggedInUserId = 1;

  let newMessage = buildMessageObject(event,loggedInUserId);

  return fetch(`${users}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(newMessage)
  })
  .then(response => response.json())
  .then(handleMessages);
};



function buildMessageObject(event, userId) {
  let messageText = document.getElementById("message-textbox").value;

  return {
    feeling: "",
    message: messageText,
    postedTime: event.timeStamp,
    userId: userId
  };
}