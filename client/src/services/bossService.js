const ENDPOINT = "http://localhost:4500/api";

const bossService = () => {
  return {
    getBosses: () => fetch(ENDPOINT + "/bosses").then(bosses => bosses.json()),
    getBossById: id =>
      fetch(ENDPOINT + "/bosses/" + id).then(boss => boss.json())
  };
};

export default bossService();
