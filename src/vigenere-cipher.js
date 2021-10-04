import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {

  encrypt(message, key) {

    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!?,:;'/ ";
    let encryptWord = "";
    for (let i = 0;i < message.length;i++) {
      encryptWord += alphabet.charAt((alphabet.indexOf(message.charAt(i)) + alphabet.indexOf(key.charAt(i % key.length))) % alphabet.length);
    }
    return encryptWord;

  }

  decrypt(encryptedMessage, key) {
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!?,:;'/ ";
    let decryptWord = "";
    for (let i = 0;i < encryptedMessage.length;i++) {
      decryptWord += alphabet.charAt(((alphabet.indexOf(encryptedMessage.charAt(i)) + alphabet.length) - alphabet.indexOf(key.charAt(i % key.length))) % alphabet.length);
    }
    return decryptWord;
  }
}
