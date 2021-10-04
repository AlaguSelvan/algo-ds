var isAnagram = function(s, t) {
    let words = new Map();
  for(let val of s) {
    words.has(val) ? words.set(val, words.get(val) + 1) : words.set(val, 1)
  }
  for(let val of t) {
    if(words.has(val) && words.get(val) >= 1) {
      words.set(val, words.get(val) - 1)
    } else {
     return false;
    }
  }

  for(let [val, idx] of words) {
    if(idx >= 1) return false
  }
  return true;
};


const output = isAnagram('ab', 'a')

console.log(output);
