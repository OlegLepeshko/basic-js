const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  arrDepth = 1
  ArrDepth = 1

  calculateDepth(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Array) {
        this.nestedArrDepth++;

        if (this.ArrDepth > this.arrDepth) {
          this.arrDepth = this.ArrDepth

        }

        this.calculateDepth(arr[i])
      }
      if (i + 1 === arr.length)
      this.ArrDepth = 1
    }
    return this.arrDepth
  }
}

module.exports = {
  DepthCalculator
};
