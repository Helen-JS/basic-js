import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    str = String(str);
    let separator = options.separator === undefined ? "+" : String(options.separator);
    let addition = String(options.addition);
    let additionSeparator = String(options.additionSeparator);
    let repeatTimes = options.repeatTimes;
    let additionRepeatTimes = options.additionRepeatTimes;

    let resStr = '';

    const [mainSepLength, additionSepLength] = [separator.length, additionSeparator.length];

    if (addition !== 'no-addition') {
        for (let i = 0; i < repeatTimes; i++) {
            let strAddition = '';
            for (let j = 0; j < additionRepeatTimes; j++) {
                strAddition += `${addition}${additionSeparator}`
            }
            resStr += `${str}${strAddition.slice(0, -additionSepLength)}${separator}`;
        }
    } else {
        for (let i = 0; i < repeatTimes; i++) {
            resStr += `${str}${separator}`;
        }
    }

    return resStr.slice(0, -mainSepLength);
}
