const { sendTextMessage } = require('./send.service');

const helpHandler = function(event) {
  // const buttonArray = [
  //   {
  //     "type":"postback",
  //     "title":"UPDATE",
  //     "payload":"update"
  //   },
  //   {
  //     "type":"postback",
  //     "tiale":"Something Else",
  //     "payload":"something else"
  //   }
  // ];

  const message =
`
Here are some of the things that you can ask for, just type these commands and I'll hadle your request

=== 'update' ===
This will get Cameron's latest location as well as some information about that city
`;

  sendTextMessage(event.sender.id, message)
    .catch(err => {throw Error(err)});
};

module.exports = helpHandler;