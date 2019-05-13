
const listAPI = {
    getData: function () {
        return fetch("http://localhost:8088/tasks")
        .then(response => response.json());
    },
    postData: function (obj) {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
          })
          .then(response => response.json());
    },
    patchData: function (obj, id) {
        return fetch(`http://localhost:8088/tasks/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
          })
          .then(response => response.json());
    }
};

export default listAPI;