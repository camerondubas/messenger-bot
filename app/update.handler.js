const { getLatestLocation, getCity } = require('./location.service');
const { getWeather } = require('./weather.service');
const { formatMessageLocation, formatMessageWeather } = require('./messageFormatter');
const { sendTextMessage, sendTypingMessage, sendSeenMessage } = require('./send.service');
const { delay } = require('../utils/timing');

module.exports = function handleUpdate(event) {
  sendSeenMessage(event.sender.id);

  getLatestLocation().then(location => {
    delay(.5, 1).then(() => {
      sendTypingMessage(event.sender.id);

      delay(1, 2)
      .then(() => sendTextMessage(event.sender.id, "Sure thing! Let me check for you."))
      .then(() => sendTypingMessage(event.sender.id));

      delay(2, 4).then(() => {
        getCity(location).then(locationData => {
          sendTextMessage(event.sender.id, formatMessageLocation(locationData))
            .then(() => sendTypingMessage(event.sender.id));

          delay(1.5, 3.5).then(() => getWeather(location)
            .then(forecast => sendTextMessage(event.sender.id, formatMessageWeather(forecast)))
          );

        });
      });

    });
  });

    // getLocalTime(location);
};