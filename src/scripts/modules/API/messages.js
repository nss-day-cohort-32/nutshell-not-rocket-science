/*


Functions available to other modules:


  fetchMessages() -- no args expected.

  addMessage(newMessageObject)

  editMessage(messageID, newMessage)

  deleteMessage(messageID)

*/

const messages = "http://localhost:8088/messages",
  messagesWithUser = `${messages}?_expand=user&_sort=postedTime&_order=desc`;

export function fetchMessages() {
  return fetch(messagesWithUser)
    .then(response => response.json());
}

export function addMessage(newMessage) {
  return fetch(messages, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMessage)
    })
    .then(response => response.json());
}
export function editMessage(messageID, newMessage) {
  return fetch(`${messages}/${messageID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMessage)
    })
    .then(response => response.json());
}

export function deleteMessage(messageID) {
  return fetch(`${messages}/${messageID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(response => response.json());
}