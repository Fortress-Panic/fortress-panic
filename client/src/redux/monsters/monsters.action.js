// jshint esversion:6
import monstersActionTypes from './monsters.types';

export const getMonsters = (monstersInfo) => {
    return ({
        type: monstersActionTypes.GET_MONSTERS,
        payload: monstersInfo
    });
};

export const setMonsterRegion = (regionInfo) => {
    return ({
        type: monstersActionTypes.SET_MONSTER_REGION,
        payload: regionInfo
    });
};