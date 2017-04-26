import { getWeather } from '../weather.service';
import geocoder from '../location.service';
import weatherEmoji from '../weather.emoji';


export default function({context, entities}) {
  console.log('Weather');
  console.log('=== Context ===');
  console.log(context);
  console.log('=== END Context ===');
  console.log(entities);
  return new Promise((resolve) => {
    if (!entities.location) {
      context.weatherNoLocation = 'Where would you like to get the weather for?';
    } else {
      geocoder.geocode(entities.location[0].value, (err, res) => {
        getWeather({latitude: res[0].latitude, longitude: res[0].longitude});
      });

    }
    resolve(context);
  });
};