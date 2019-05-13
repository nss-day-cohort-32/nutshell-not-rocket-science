const baseURL = "http://localhost:8088";

const API = {
  getData: function(params) {
    if (params === undefined) params = "";
    return fetch(`${baseURL}/events${params}`).then(response =>
      response.json()
    );
  },
  postData: function(obj) {
    fetch(`${baseURL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(response => response.json());
  },
  patchData: function(obj, id) {
    fetch(`${baseURL}/events/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(response => response.json());
  }
};

export default API;
