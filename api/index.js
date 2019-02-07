import { Client } from 'r3shaper';

const apiClient = new Client({
  basePath: 'http://api.openweathermap.org/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
