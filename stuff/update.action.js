const { getLatestLocation, getCity } = require('../location.service');
// const { getWeather } = require('./weather.service');
const { formatMessageLocation, formatMessageWeather } = require('../messageFormatter');
// const { sendTextMessage, sendTypingMessage, sendSeenMessage } = require('./send.service');
// const { delay } = require('../utils/timing');

module.exports = function updateAction({context, entities}) {
  return new Promise((resolve) => {
    console.log(context, entities);
    getLatestLocation().then(location => {

      //   delay(.5, 1).then(() => {
      //     sendTypingMessage(event.sender.id);
      //
      //     delay(1, 2)
      //     .then(() => sendTextMessage(event.sender.id, "Sure thing! Let me check for you."))
      //     .then(() => sendTypingMessage(event.sender.id));
      //
      //     delay(2, 4).then(() => {
            getCity(location).then(locationData => {
              context.location = formatMessageLocation(locationData);
              console.log('GOT LOCATION', location);
              resolve(context);
            });
              // sendTextMessage(event.sender.id, formatMessageLocation(locationData))
      //           .then(() => sendTypingMessage(event.sender.id));
      //
      //         delay(1.5, 3.5).then(() => getWeather(location)
      //           .then(forecast => sendTextMessage(event.sender.id, formatMessageWeather(forecast)))
      //         );
      //
      //       });
      //     });
      //   });
    });
  });
  // sendSeenMessage(event.sender.id);
  //


    // getLocalTime(location);
};