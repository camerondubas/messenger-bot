import { wit, findOrCreateSession, sessions } from './wit';

export const handleIncomingMessage = (req, res) => {
  const data = req.body;

  // Make sure this is a page subscription
  if (data.object === 'page') {

    // Iterate over each entry - there may be multiple if batched
    data.entry.forEach(entry => {

      // Iterate over each messaging event
      entry.messaging.forEach(event => {
        if (event.message && !event.message.is_echo) {
          const sender = event.sender.id;
          const sessionId = findOrCreateSession(sender);
          const {text, attachments} = event.message;

          if (attachments) {
            // We received an attachment
            // Let's reply with an automatic message
            // TODO Send Error Message
          } else if (text) {
            wit.runActions(
              sessionId, // the user's current session
              text, // the user's message
              sessions[sessionId].context // the user's current session state
            ).then(context => {
              // Our bot did everything it has to do.
              // Now it's waiting for further messages to proceed.
              console.log('Waiting for next user messages');
              // Updating the user's current session state
              sessions[sessionId].context = context;
            })
            .catch((err) => {
              console.error('Oops! Got an error from Wit: ', err.stack || err);
            })
          }
        } else {
          console.log('received event', JSON.stringify(event));
        }
      });
    });

    res.sendStatus(200);
  }
};