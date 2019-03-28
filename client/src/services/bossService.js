const ENDPOINT = "http://localhost:4500/api";

const bossService = () => {
  return {
    getBosses: () => fetch(ENDPOINT + "/bosses").then(bosses => bosses.json()),
    getBossById: id =>
      fetch(ENDPOINT + "/bosses/" + id).then(boss => boss.json()),
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
  };
};

export default bossService();
