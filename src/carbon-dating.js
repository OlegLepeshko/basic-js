const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

  function dateSample(val) {

    if ( !isNaN(Number(val)) && Number(val) > 0 && Number(val) < 14.9 && typeof val === 'string') {

      k = 0.693 / HALF_LIFE_PERIOD;

      t = Math.log(MODERN_ACTIVITY / val) / k;

      return Math.ceil(t);
    }

    return false;
  }


module.exports = {
  dateSample
};
