import { UPDATE_BOSSES } from "../constants/constants";

const initialState = {
  bosses: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_BOSSES:
      console.log("Updating/storing bosses");
      return {
        ...state,
        bosses: action.payload
      };
    default:
      return state;
  }
}
