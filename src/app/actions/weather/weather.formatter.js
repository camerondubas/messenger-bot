import emoji from 'node-emoji';

export default function(dailyForecast, location) {
  const message = 'Today in ' +
    `${emoji.get('flag-' + location.countryCode.toLowerCase())} ${location.city}, ${location.country} ` +
    `it's going to be ${Math.round(dailyForecast[0].temp.day)} °C.`;
  return message;
};
