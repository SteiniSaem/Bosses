import bossService from "../services/bossService";
import { UPDATE_BOSSES, SET_CURRENT_BOSS } from "../constants/constants";

export const getBosses = () => {
  return dispatch => {
    return bossService.getBosses().then(bosses => {
      dispatch(getBossesSuccess(bosses));
    });
  };
};

export const setCurrentBoss = id => {
  return dispatch => {
    return bossService.getBossById(id).then(boss => {
      dispatch(setCurrentBossSuccess(boss));
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

const setCurrentBossSuccess = boss => {
  console.log("setting current boss");
  console.log(boss);

  return {
    type: SET_CURRENT_BOSS,
    payload: boss
  };
};
