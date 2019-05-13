const users = "http://localhost:8088/users";


export function addNewUser(newUserObject) {
  return fetch(`${users}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newUserObject)
    })
    .then(response => response.json());
}


export function updateOnlineStatus(user, isOnline) {
  return fetch(`${users}/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        isOnline: isOnline
      })
    })
    .then(response => response.json());
}

export function getUser(params) {
  return fetch(`${users}${params}`)
    .then(response => response.json());
}

export function getUserFromID(id) {
  return fetch(`${users}/${id}`)
    .then(response => response.json());
}