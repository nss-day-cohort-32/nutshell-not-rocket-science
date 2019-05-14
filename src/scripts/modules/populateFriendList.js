import { getLoggedInUser } from "./helpers/sessionStorage";

export const getFriendList = () => {
    let userObj = getLoggedInUser();

    fetch(`http://localhost:8088/friends?sourceId=${userObj.id}&_expand=user`)
    .then(response => response.json())
    .then(data => {
    console.log(data);
    console.log("more", data[0].id);
    const friendDiv = document.createElement("div");
    friendDiv.id = `friend-${data[0].id}`;

    data.forEach(friend => {
        console.log(friend);
        const html = `
        <h3 id="friend-${friend.id}">${friend.user.userName}</h3>
        <button id="deleteFriend-${friend.id}>Delete Friend</button>
        `;
    friendDiv.innerHTML += html;
    });

    document.querySelector(".sidebar-friendList-header").appendChild(friendDiv);
    });
};
