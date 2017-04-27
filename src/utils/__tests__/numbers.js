import { randomNumberInRange } from '../numbers';

describe('Number Utils', () => {

  describe('Random Number In Range', () => {

    test('Handle No Params', () => {
      Math.random = jest.fn(() => 0.4);
      expect(randomNumberInRange()).toBe(0);

      Math.random = jest.fn(() => 0.6);
      expect(randomNumberInRange()).toBe(1);
    });

    test('Handle Positive Range', () => {
      Math.random = jest.fn(() => 0.4);
      expect(randomNumberInRange(1, 10)).toBe(5);
      expect(randomNumberInRange(63, 403)).toBe(199);
      expect(randomNumberInRange(593, 2953)).toBe(1537);

      Math.random = jest.fn(() => 0.6);
      expect(randomNumberInRange(1, 10)).toBe(7);
      expect(randomNumberInRange(63, 403)).toBe(267);
      expect(randomNumberInRange(593, 2953)).toBe(2009);
    });

    test('Handle Negative Range', () => {
      Math.random = jest.fn(() => 0.4);
      expect(randomNumberInRange(10, 1)).toBe(5);
      expect(randomNumberInRange(403, 63)).toBe(199);
      expect(randomNumberInRange(2953, 593)).toBe(1537);

      Math.random = jest.fn(() => 0.6);
      expect(randomNumberInRange(10, 1)).toBe(7);
      expect(randomNumberInRange(403, 63)).toBe(267);
      expect(randomNumberInRange(2953, 593)).toBe(2009);
    })
  });
});