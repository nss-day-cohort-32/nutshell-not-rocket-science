const articleEndpoint = "http://localhost:8088/articles";



export function getArticles(params) {
    if (params === undefined) params = "";
    return fetch(`${articleEndpoint}${params}`)
        .then(response => response.json());
}

export function postArticle(obj) {
    return fetch("http://localhost:8088/articles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    })
        .then(response => response.json());
};


// export function addNewUser(newUserObject) {
//     return fetch(`${users}`, {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json"
//         },
//         body: JSON.stringify(newUserObject)
//       })
//       .then(response => response.json());
//   }


//   export function updateOnlineStatus(user, isOnline) {
//     return fetch(`${users}/${user.id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-type": "application/json"
//         },
//         body: JSON.stringify({
//           isOnline: isOnline
//         })
//       })
//       .then(response => response.json());
//   }



//   export function getUserFromID(id) {
//     return fetch(`${users}/${id}`)
//       .then(response => response.json());
//   }