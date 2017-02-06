const { randomNumberInRange } =  require('../utils/numbers');

const delay = function(min = 1, max = 3) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, randomNumberInRange(min * 1000, max * 1000));
  })
};

module.exports = {
  delay
};