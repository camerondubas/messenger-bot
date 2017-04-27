import request from 'request';
import { removeLineBreaks, removeWhitespace } from '../../../utils/strings';

const OPEN_WEATHER_MAP_API_KEY = 'c2d45ae01e9ba02b3e076ddb6ff07f9e';

export const getWeather = function(location) {
  return new Promise((resolve, reject) => {

    const url = getWeatherAPIUrl(location.latitude, location.longitude);

    request(url, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        let weatherData = JSON.parse(body);
        resolve(weatherData.list);

      } else if (error) {
        reject(error);

      }
    });
  });
};

const getWeatherAPIUrl = function(lat, lng) {
  let url = `http://api.openweathermap.org/data/2.5/forecast/daily
  ?lat=${lat}
  &lon=${lng}
  &cnt=5
  &units=metric
  &lang=en
  &mode=json
  &APPID=${OPEN_WEATHER_MAP_API_KEY}`;

  return removeWhitespace(removeLineBreaks(url));

};