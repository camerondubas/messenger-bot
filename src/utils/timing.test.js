import { delay } from './timing';

describe('Timing Utils', () => {
  describe('delay', () => {

    xtest('resolve after one second', () => {
      jest.useFakeTimers();

      const fn = delay(1,1);

      jest.runAllTimers();

      return fn.then(data => {
        expect(data).toBeUndefined();

        expect(setTimeout.mock.calls.length).toBe(1);
        expect(setTimeout.mock.calls[0][1]).toBe(1000);
      });
    });
  });
})