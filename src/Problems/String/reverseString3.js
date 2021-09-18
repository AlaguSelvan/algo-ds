/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(" ");
    let res = "";
    for(let word of words) {
      res += (word.split("").reverse().join("") + " ");
    }
    return res.trim();
};

const output = reverseWords("Let's take LeetCode contest");

console.log(output);
