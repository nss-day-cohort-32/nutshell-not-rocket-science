

const getFriends = () => {
    return fetch("http://localhost:8088/friends?sourceId=1&_expand=user")
    .then(response => response.json());
};


getFriends().then(data => {
    console.log(data);
    console.log("more", data[0].id);

    const friendDiv = document.createElement("div");
    friendDiv.id = `friend-${data[0].id}`;
    const html = `
        <h3>${data[0].user.userName}</h3>
        <button id="deleteFriend-${data[0].id}>Delete Friend</button>
    `;
    friendDiv.innerHTML = html;
    document.querySelector(".sidebar-friendList-header").appendChild(friendDiv);
});