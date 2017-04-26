import { Wit, log } from 'node-wit';
const WIT_ACCESS_TOKEN = 'HSHZU5FHLSPNUVL5J2G2HDBFIXFFZTXR';

import actions from './actions/index';

// ----------------------------------------------------------------------------
// Wit.ai bot specific code

// This will contain all user sessions.
// Each session has an entry:
// sessionId -> {fbid: facebookUserId, context: sessionState}
export let sessions = {};

export const findOrCreateSession = fbid => {
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

// Setting up our bot
export const wit = new Wit({
  accessToken: WIT_ACCESS_TOKEN,
  actions,
  logger: new log.Logger(log.INFO)
});