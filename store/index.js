import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const initialState = {
  currentPlace: { lat: 47.00367, lng: 28.907089 },
  forecasts: {},
};

const store = () => {
  return new Vuex.Store({
    state: {
      ...initialState,
    },
    mutations,
    actions,
  });
};

export default store;
