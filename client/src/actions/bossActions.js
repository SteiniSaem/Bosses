import bossService from "../services/bossService";
import {
  UPDATE_BOSSES,
  SET_CURRENT_BOSS,
<<<<<<< HEAD
  CREATE_BOSS
=======
  DELETE_BOSS
>>>>>>> 8bc287d5ea96906fc4de8bed0795525fd4d4a043
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

<<<<<<< HEAD
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

export const updateBosses = bosses => {
  return {
    type: UPDATE_BOSSES,
    payload: bosses
=======
export const deleteBoss = boss => {
  console.log(boss);
  return dispatch => {
    return bossService.deleteBoss(boss).then(() => {
      dispatch(deleteBossSuccess(boss.id));
    });
>>>>>>> 8bc287d5ea96906fc4de8bed0795525fd4d4a043
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

<<<<<<< HEAD
const createBossSuccess = boss => {
  console.log("creating boss in action");

  return {
    type: CREATE_BOSS,
    payload: boss
=======
const deleteBossSuccess = id => {
  console.log("in deleteBoss action");
  console.log(id);

  return {
    type: DELETE_BOSS,
    payload: id
>>>>>>> 8bc287d5ea96906fc4de8bed0795525fd4d4a043
  };
};
