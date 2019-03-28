import {
  UPDATE_BOSSES,
  SET_CURRENT_BOSS,
  CREATE_BOSS,
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
    case CREATE_BOSS:
      console.log("Creating bohs");
      console.log(action.payload);
      return {
        ...state,
        bosses: [...state.bosses, action.payload]
      };
    default:
      return state;
  }
}
