import { getWeather } from './weather.service';
import geocoder from '../../location.service';
import formatMessage from './weather.formatter';

export default function({context, entities}) {
  return new Promise((resolve) => {
    if (!entities.location) {
      context.weatherNoLocation = 'Where would you like to get the weather for?';
      resolve(context);
    } else {
      geocoder.geocode(entities.location[0].value, (err, res) => {
        getWeather({latitude: res[0].latitude, longitude: res[0].longitude}).then(
          data => {
            context.weather = formatMessage(data, res[0]);
            resolve(context);
          }
        );
      });

    }
  });
};