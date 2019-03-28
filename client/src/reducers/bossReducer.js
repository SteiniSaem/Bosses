import {
  UPDATE_BOSSES,
  SET_CURRENT_BOSS,
  DELETE_BOSS
} from "../constants/constants";

const initialState = {
  bosses: [],
  currentBoss: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_BOSSES:
      console.log("Updating/storing bosses");
      return {
        ...state,
        bosses: action.payload
      };
    case SET_CURRENT_BOSS:
      console.log("Setting current boss");
      return {
        ...state,
        currentBoss: action.payload
      };
    case DELETE_BOSS:
      console.log("Deleting boss");
      return {
        ...state,
        bosses: state.bosses.filter(boss => boss.id !== action.payload)
      };
    default:
      return state;
  }
}
