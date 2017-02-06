const { sendTextMessage } = require('./send.service');

const unknownHandler = function(event) {
  sendTextMessage(event.sender.id, 'This will be the fallback message if the command was not understood');
};

module.exports = unknownHandler;