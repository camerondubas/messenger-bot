jest.unmock('request');

import sendAction from '../send.action';
import * as sendService from '../send.service';
import * as wit from '../../../wit'

sendService.sendTextMessage = jest.fn(() => {
  return new Promise((resolve, reject) => {
    resolve()
  });
})

describe('Send Action', () => {
  const sessionId = 1;
  const text = 'text';
  const fbid = 2;

  beforeEach(() => {
    wit.sessions[sessionId] = {fbid};
  });

  test('Send Text Message, when given a Session and Message', () => {
    return sendAction({sessionId}, {text}).then(
      data => {
        expect(data).toBeNull();
      }
    )
  });

  afterEach(() => {
    wit.sessions = {};
  })
});
