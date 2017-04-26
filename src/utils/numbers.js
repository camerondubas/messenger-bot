export const randomNumberInRange = function(val1 = 0, val2 = 1) {
  const max = Math.max(val1, val2);
  const min = Math.min(val1, val2);
  const randomValue = Math.random();

  return Math.floor(randomValue * (max - min + 1)) + min;
};
