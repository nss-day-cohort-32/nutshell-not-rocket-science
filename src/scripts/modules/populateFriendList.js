

const getFriends = () => {
    return fetch("http://localhost:8088/users/1?_embed=friends")
    .then(response => response.json());
};


getFriends().then(data => {
    console.log(data);

    const friendDiv = document.createElement("div");
    friendDiv.id = `friend-${data.id}`;
    const html = `
        <h3>${data.id}</h3>
        <button id="deleteFriend-${data.id}>Delete Friend</button>
    `;
    friendDiv.innerHTML = html;
    document.querySelector("#friendsList").appendChild(friendDiv);
});