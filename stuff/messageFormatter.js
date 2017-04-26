const emoji = require('node-emoji');
const weatherEmoji = require('./weather.emoji');
const { toTitleCase } = require('../utils/strings');
const moment = require('moment');

const formatMessageLocation = function(location) {
  const { city, country, countryCode } = location[0];

  const message =
`Right now, Cameron's in 
${emoji.get(`flag-${countryCode.toLowerCase()}`)} ${city ? city + ',': ''} ${country}
`;
  return message;
};


const formatMessageWeather = function(forecast) {
  let dailyWeather = [];
  forecast.forEach((day, idx) => {
    const weather = day.weather[0];
    const dayName = getDayName(idx);
    const temp = getTemp(idx, day);
    const description = `${weatherEmoji[weather.description]}  ${toTitleCase(weather.description)}`;
    const msg =
`--- ${dayName} ---
${description}
${temp}

`;
    dailyWeather.push(msg);
  });
  const message =
`
Here's the weather,

${dailyWeather.join('')}
`;

  return message;
};


const getDayName = function(idx) {
  if (idx === 0) {
    return 'Today';
  } else if (idx === 1) {
    return 'Tomorrow';
  }

  return `${moment().add(idx + 1, 'day').format('ddd, MMM Do')}`;
};

const getTemp = function(idx, day) {
  if (idx === 0) {
    return `
Morning: ${emoji.get('thermometer')} ${Math.round(day.temp.morn)} °C
Daytime: ${emoji.get('thermometer')} ${Math.round(day.temp.day)} °C
Evening: ${emoji.get('thermometer')} ${Math.round(day.temp.eve)} °C
Night:      ${emoji.get('thermometer')} ${Math.round(day.temp.night)} °C`;
  }

  return `${emoji.get('thermometer')}  ${Math.round(day.temp.day)} °C`;
};

module.exports = {
  formatMessageLocation,
  formatMessageWeather
};

