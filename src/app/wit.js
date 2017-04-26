import { Wit, log } from 'node-wit';
const WIT_ACCESS_TOKEN = 'EYFGJSETTMEJSTTSGQH6YTB6WDHINDSB';

import { sendTextMessage } from './send.service';

import allActions from './actions/index';
// ----------------------------------------------------------------------------
// Wit.ai bot specific code

// This will contain all user sessions.
// Each session has an entry:
// sessionId -> {fbid: facebookUserId, context: sessionState}
export let sessions = {};

export const findOrCreateSession = (fbid) => {
  let sessionId;
  // Let's see if we already have a session for the user fbid
  Object.keys(sessions).forEach(key => {
    if (sessions[key].fbid === fbid) {
      // Yep, got it!
      sessionId = key;
    }
  });

  if (!sessionId) {
    // No session found for user fbid, let's create a new one
    sessionId = new Date().toISOString();
    sessions[sessionId] = {fbid, context: {}};
  }
  return sessionId;
};

const sendAction = {
  send({sessionId}, {text}) {
    // Our bot has something to say!
    // Let's retrieve the Facebook user whose session belongs to
    console.log(sessions);
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
  }
};

// Setting up our bot
export const wit = new Wit({
  accessToken: WIT_ACCESS_TOKEN,
  actions: Object.assign({}, sendAction, allActions),
  logger: new log.Logger(log.INFO)
});

module.exports = {wit, findOrCreateSession, sessions};