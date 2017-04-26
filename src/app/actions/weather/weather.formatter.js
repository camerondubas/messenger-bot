const emoji = require('node-emoji');
// import weatherEmoji from './weather.emoji';
const { toTitleCase } = require('../../../utils/strings');
const moment = require('moment');

export default function(dailyForecast, location = 'Generic Location') {
  let dailyWeather = [];

  dailyForecast.forEach((day, idx) => {
    const weather = day.weather[0];
    const dayName = getDayName(idx);
    const temp = getTemp(idx, day);
    const description = toTitleCase(weather.description);
    const msg =
`--- ${dayName} ---
${description}
${temp}

`;
    dailyWeather.push(msg);
  });
  const message =
    `
Here's the weather in ${emoji.get('flag-' + location.countryCode.toLowerCase())} ${location.formattedAddress}

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