const ENDPOINT = "http://localhost:4500/api";

const bossService = () => {
  return {
    getBosses: () => fetch(ENDPOINT + "/bosses").then(bosses => bosses.json())
  };
};

export default bossService();
