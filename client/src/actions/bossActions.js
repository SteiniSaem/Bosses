import bossService from "../services/bossService";
import { UPDATE_BOSSES } from "../constants/constants";

export const getBosses = () => {
  return dispatch => {
    return bossService.getBosses().then(bosses => {
      dispatch(getBossesSuccess(bosses));
    });
  };
};

const getBossesSuccess = bosses => {
  console.log("in getBosses action ");
  console.log(bosses);

  return {
    type: UPDATE_BOSSES,
    payload: bosses
  };
};
