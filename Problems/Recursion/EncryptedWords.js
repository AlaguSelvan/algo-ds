
/**
 * Recursive call.
 */
function findEncryptedWord(s) {
 
    // **** initialization ****
    let r    = "";
    let mid     = 0;
 
    // **** [0] compute the position of of middle character in S ****
    mid = s.length / 2;
    if (s.length % 2 == 0)
        mid -= 1;
 
    // **** [1] append the middle character of S ****
    r += s.substring(mid, mid + 1);
    // **** [2] append the encrypted version of the substring of S 
    //      that's to the LEFT of the middle character (if non-empty) ****
    if (mid > 0) {
 
        // **** generate left sub string ****
        let ls = s.substring(0, mid);
        // **** encrypt and append ***
				console.log(ls)
        r += findEncryptedWord(ls);
			}
 
    // **** [3] append the encrypted version of the substring of S 
    //      that's to the RIGHT of the middle character (if non-empty) ****
    if (mid < s.length - 1) {
				console.log(s)
        // **** generate right sub string ****
        let rs = s.substring(mid + 1, s.length);
 
        // **** encrypt and append ****
        r += findEncryptedWord(rs);;
    }
 
    // **** return encrypted string ****
    return r;
}

var s_2 = "abcd";
var expected_2 = "bacd";
var output_2 = findEncryptedWord(s_2);

console.log(output_2);