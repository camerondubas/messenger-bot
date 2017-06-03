import * as sendService from '../send.service';

jest.unmock('../send.service');

describe('Send Service', () => {
  describe('Send Text Message', () => {
    test('Given <id> and <text, call Send API', () => {
      return sendService.sendTextMessage(1, 'message').then(data => {
        expect(data).toBeUndefined();
      });
    });
  });

  describe('Send Typing Message', () => {
    test('Send Typing Message', () => {
      return sendService.sendTypingMessage(1).then(data => {
        expect(data).toBeUndefined();
      });
    });
  });

    describe('Send Seen Message', () => {
    test('Send Seen Message', () => {
      return sendService.sendSeenMessage(1).then(data => {
        expect(data).toBeUndefined();
      });
    });
  });
});
