import { sessions } from '../../wit';
import { sendTextMessage } from './send.service';

export default function({sessionId}, {text}) {
  const recipientId = sessions[sessionId].fbid;
  if (recipientId) {
    return sendTextMessage(recipientId, text)
    .then(() => null)
    .catch((err) => {
      console.error(
        'Oops! An error occurred while forwarding the response to',
        recipientId,
        ':',
        err.stack || err
      );
    });
  } else {

    console.error('Oops! Couldn\'t find user for session:', sessionId);
    // Giving the wheel back to our bot
    return Promise.resolve()
  }
};
