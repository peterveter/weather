import * as types from '../constants/mutationTypes';
import { WeatherResource } from '../api/weather';

export default {
  changePlace({ commit, dispatch }, payload) {
    commit(types.CHANGE_PLACE, payload);
    dispatch('fetchWeather', payload);
  },
  async fetchWeather({ commit }, { lat, lng }) {
    const forecasts = await WeatherResource.show({
      params: {
        lat,
        lon: lng,
      },
    });
    commit(types.SET_FORECASTS, forecasts);
  },
};
