import {
    getLoggedInUser
} from "./helpers/sessionStorage";

export const getFriendList = () => {
    let userObj = getLoggedInUser();

    fetch(`http://localhost:8088/friends?sourceId=${userObj.id}&_expand=user`)
        .then(response => response.json())
        .then(data => {
            let friendListHeader = document.querySelector(".sidebar-friendList-header");
            friendListHeader.innerHTML = "";
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

            friendListHeader.appendChild(friendDiv);
        });
};


export const addFriend = function (person1Id, person2Id) {
    fetch("http://localhost:8088/friends", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify([{
                    sourceId: person1Id,
                    userId: person2Id
                },
                {
                    sourceId: person2Id,
                    userId: person1Id
                }
            ])
        })
        .then(response => response.json())
        .then(getFriendList);
};

// {
//     "id": 1,
//     "sourceId": 1,
//     "userId": 2
//   },