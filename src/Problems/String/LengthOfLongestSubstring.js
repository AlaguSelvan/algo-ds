/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let start = 0;
  let end = 0;
  let max = 0;
  let lastSeen = new Map();
  for(let idx in s) {
    let val = s[idx];
    if(lastSeen.has(val) && lastSeen.get(val) >= start) {
      start = Math.max(start, lastSeen.get(val) + 1);
    }
    lastSeen.set(val, idx);
    end = idx;
    max = Math.max(max, end - start + 1);
  }
  return max;
};

const op = lengthOfLongestSubstring('pwwkew');

console.log(op)
