var checkInclusion = function(s1, s2) {
  let lastSeen = new Map();
  for(let idx in s1) {
    lastSeen.set(s1.charAt(idx), true)
  };
  for(let idx in s2) {
    let curr = s2.charAt(idx)
    if(lastSeen.has(curr)) {
      console.log(curr)
      let next = s2.charAt(parseInt(idx) + 1);
      if(lastSeen.has(next)) {
        return true
      }
    }
  }
  return false;
};


const op = checkInclusion("ab", "eidbaooo");

console.log(op)
