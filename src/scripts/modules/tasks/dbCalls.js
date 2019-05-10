const baseURL = "http://localhost:8088";

const API = {
    getData: function () {
        return fetch(`${baseURL}/tasks`)
        .then(response => response.json());
    },
    postData: function (obj) {
        fetch(`${baseURL}/tasks`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
          })
          .then(response => response.json());
    },
    patchData: function (obj, id) {
        fetch(`${baseURL}/tasks/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
          })
          .then(response => response.json());
    }
};

export default API;