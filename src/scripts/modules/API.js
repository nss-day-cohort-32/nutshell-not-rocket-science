const myDB = "http://localhost:8088";


module.exports.API = {
  games: new Endpoint(`${myDB}/games`)
};


function Endpoint(url) {
  this.create = (obj) => {
    return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      })
      .then(response => response.json());
  };
  this.read = (params) => {
    let newURL = url;
    if (params) newURL += `/${params}`;
    return fetch(newURL)
      .then(response => response.json());
  };
  this.update = (id, object) => {
    return fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
      })
      .then(response => response.json());
  };
  this.replace = (id, newObject) => {
    return fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newObject)
      })
      .then(response => response.json());
  };
  this.delete = (id) => {
    return fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json());
  };

}