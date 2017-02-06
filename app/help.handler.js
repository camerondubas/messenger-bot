const { sendTextMessage } = require('./send.service');

const helpHandler = function(event) {
  sendTextMessage(event.sender.id, 'This will be the help menu');
};

module.exports = helpHandler;