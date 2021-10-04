import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {

  if (!(members instanceof Array)) return false;

  const teamNameMixed = [];
  const len = members.length;

  for (let i = 0; i < len; i++) {
    if (typeof members[i] === 'string') {
      const trimmedMember = members[i].trim();
      teamNameMixed.push(trimmedMember[0].toUpperCase());
    }
  }
  return teamNameMixed.sort().join('');
}
