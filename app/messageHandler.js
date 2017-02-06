const handleUpdate = require('./update.handler');
const handleHelp = require('./help.handler');
const handleUnknown = require('./unknown.handler');
const handleGreeting = require('./greeting.handler');

const handleIncomingMessage = function (req, res) {
  var data = req.body;

  // Make sure this is a page subscription
  if (data.object === 'page') {

    // Iterate over each entry - there may be multiple if batched
    data.entry.forEach(function(entry) {
      var pageID = entry.id;
      var timeOfEvent = entry.time;

      // Iterate over each messaging event
      entry.messaging.forEach(function(event) {
        if (event.message) {
          receivedMessage(event);
        } else {
          console.log("Webhook received unknown event: ", event);
        }
      });
    });

    res.sendStatus(200);
  }
};

const receivedMessage = function(event) {
  const {text, attachments} = event.message;

  if (text) {
    switch (text.toLowerCase()) {
      case 'update':
        handleUpdate(event);
        break;
      case 'help' :
        handleHelp(event);
        break;
      case 'hello':
      case 'hi':
      case 'hey':
        handleGreeting(event);
        break;
      default:
        handleUnknown(event);
    }
  } else if (attachments) {
    // TODO: handle this case
  }
};


module.exports = {
  handleIncomingMessage,
  receivedMessage
};