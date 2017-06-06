import emoji from 'node-emoji';

export default function(dailyForecast, location) {
  const message = 'Today in ' +
    `${emoji.get('flag-' + location.countryCode.toLowerCase())} ${location.city}, ${location.country} ` +
    `there's going to be highs of ${Math.round(dailyForecast[0].temp.max)}°C and lows of ${Math.round(dailyForecast[0].temp.max)}°C with ${dailyForecast[0].weather[0].description}`;
  return message;
};
