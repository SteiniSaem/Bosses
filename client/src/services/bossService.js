const ENDPOINT = "http://localhost:4500/api";

const bossService = () => {
  return {
    getBosses: () => fetch(ENDPOINT + "/bosses").then(bosses => bosses.json()),
    getBossById: id =>
      fetch(ENDPOINT + "/bosses/" + id).then(boss => boss.json()),
<<<<<<< HEAD
    createBoss: boss =>
      fetch(ENDPOINT + "/bosses", {
        method: "POST", // or 'PUT'
        body: JSON.stringify(boss), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(resp => resp.json())
        .then(response => response)
=======
    deleteBoss: boss =>
      fetch(ENDPOINT + "/bosses/" + boss.id, { method: "delete" }).then(boss =>
        boss
          .json()
          .then(json => {
            return json;
          })
          .catch(error => console.log(error))
      )
>>>>>>> 8bc287d5ea96906fc4de8bed0795525fd4d4a043
  };
};

export default bossService();
