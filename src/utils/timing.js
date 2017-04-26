import { randomNumberInRange } from '../utils/numbers';

export const delay = function(min = 1, max = 3) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, randomNumberInRange(min * 1000, max * 1000));
  })
};