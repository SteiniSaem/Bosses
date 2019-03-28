import bossService from "../services/bossService";
import {
  UPDATE_BOSSES,
  SET_CURRENT_BOSS,
  CREATE_BOSS
} from "../constants/constants";

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

export const createBoss = boss => {
  console.log("CREATE BOSS ");
  console.log(boss);
  return dispatch => {
    return bossService.createBoss(boss).then(newBoss => {
      dispatch(createBossSuccess(newBoss));
    });
  };
};

/*
export const editBoss = boss => {
  return dispatch => {
    return bossService.editBoss(boss).then(() => {
      return bossService.getBosses().then(bosses => {
        dispatch(getBossesSuccess(bosses));
      });
    });
  };
};
*/

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

const createBossSuccess = boss => {
  console.log("creating boss in action");

  return {
    type: CREATE_BOSS,
    payload: boss
  };
};
