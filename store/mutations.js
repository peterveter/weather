import * as types from '../constants/mutationTypes';

export default {
  [types.CHANGE_PLACE](state, payload) {
    state.currentPlace = payload;
  },
  [types.SET_FORECASTS](state, payload) {
    state.forecasts = payload;
  },
};
