import weatherIcons from '../assets/weatherIcons';

export const getDayTime = date => {
  const time = new Date(date);
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const weekDay = days[time.getDay()];
  const month = months[time.getMonth()];
  const day = time.getDate();
  return `${weekDay}, ${day} ${month}`;
};

const getIconName = forecast => {
  const code = forecast.weather[0].id;
  let time = new Date(forecast.dt_txt).getHours();
  let icon = weatherIcons[code].icon;

  if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
    if (time >= 6 && time <= 18) {
      icon = 'wi-day-' + icon;
    } else {
      icon = 'wi-night-alt-' + icon;
    }
  }
  return icon;
};

export const getImagePath = forecast => {
  const icon = getIconName(forecast);
  return require(`../assets/svg/${icon}.svg`);
};

export const getLocation = city => {
  if (city.name && city.country) {
    return `${city.name}, ${city.country}`.toUpperCase();
  }
  return 'Unknown';
};

export const getRealLong = lng => {
  const factor = (lng - (lng % 180)) / 180;
  if (lng > 180) {
    if (factor % 2 === 0) {
      lng = 0 + (lng % 180);
    } else {
      lng = -180 + (lng % 180);
    }
  } else if (lng < -180) {
    if (factor % 2 === 0) {
      lng = 0 + (lng % 180);
    } else {
      lng = 180 + (lng % 180);
    }
  }
  return lng;
};
