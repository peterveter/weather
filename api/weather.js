import apiClient from '.';
import { weatherEndpoints } from '../constants/endpoints';

const normalizeResponse = ({ city, list }) => {
  const forecasts = list.filter(item => list.indexOf(item) % 8 === 0);
  return { city, list:forecasts };
};

export const WeatherResource = {
  show: apiClient.get(weatherEndpoints.show, {
    onResponse: normalizeResponse,
  }),
};
