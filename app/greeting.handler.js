const { sendButtonMessage } = require('./send.service');

const greetingHandler = function(event) {
  const buttonArray = [
    {
      "type":"postback",
      "title":"Where is Cameron?",
      "payload":"update"
    },
    {
      "type":"postback",
      "title":"See all commands",
      "payload":"help"
    }
  ];
  const message = 'Hi there! what would you like to do? Here are a couple options, otherwise just type whatever you want.';

  sendButtonMessage(event.sender.id, message, buttonArray)
  .catch(err => {throw Error(err)});
};

module.exports = greetingHandler;