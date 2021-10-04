import {NotImplementedError} from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
    let str = String(n).split('').map(Number)
    return Math.max(...str.map((el, i) => {
                let origArr = str.slice();
                origArr.splice(i, 1);
                return Number(origArr.join(''))
            }
        )
    )
}
