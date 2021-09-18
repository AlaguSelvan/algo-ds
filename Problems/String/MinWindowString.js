/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(!s || !t || s.length === 0 || t.length === 0) return '';
    let map = new Map();
    for(let i =0; i < t.length; i++) {
			let c = t.charAt(i)
			let val = map.get(c) || 0
			map.set(c, val + 1)
    }
    let i = 0;
    let j = 0;
    let count = map.size;
    let left = 0;
    let right = s.length - 1;
    let min = s.length;
    let found = false;
    while(j < s.length) {
        let endChar = s.charAt(j++)
        if(map.has(endChar)) {
            map.set(endChar, map.get(endChar) - 1)
            if(map.get(endChar) === 0) count -= 1;
        }
        if (count > 0) continue;
        while(count === 0) {
            let startChar = s.charAt(i++)
             if(map.has(startChar)) {
                map.set(startChar, map.get(startChar) + 1)
                if(map.get(startChar) > 0) count += 1;
            }
        }
        if((j - i) < min) {
            left = i;
            right = j;
            min = j - i;
            found = true;
        }
    }
    return !found ? '' : s.substring(left - 1, right)
};

minWindow('ADOBECODEBANC', 'ABC')