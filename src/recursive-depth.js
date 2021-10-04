import { NotImplementedError } from '../extensions/index.js';

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
export default class DepthCalculator {
  calculateDepth(arr) {

    const hasNestedArray = (arr) => arr.some(item => Array.isArray(item));
    let depth = 1;

    if (hasNestedArray(arr)) {
      const newArr = arr.reduce((acc, cur) => acc.concat(cur), []);
      return depth + this.calculateDepth(newArr);
    }
    return depth;
  }
}
