const ENDPOINT = "http://localhost:4500/api";

const bossService = () => {
  return {
    getBosses: () => fetch(ENDPOINT + "/bosses").then(bosses => bosses.json()),
    getBossById: id =>
      fetch(ENDPOINT + "/bosses/" + id).then(boss => boss.json()),
    deleteBoss: boss =>
      fetch(ENDPOINT + "/bosses/" + boss.id, { method: "delete" }).then(boss =>
        boss
          .json()
          .then(json => {
            return json;
          })
          .catch(error => console.log(error))
      )
  };
};

export default bossService();
