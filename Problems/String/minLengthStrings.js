// Add any extra import statements you may need here


// Add any helper functions you may need here

// def min_length_substring(s, t):
//   # Write your code here
//   maxLength = len(s)+1
//   q = []
//   len_t = len(t)
//   counts = {}
//   for i in t:
//     counts[i] = 1 if i not in counts else counts[i]+1
  
//   for i in range(len(s)):
//     if s[i] in counts:
//       if len(q) > 0 and s[i] == s[q[0]] and counts[s[i]] == 0:
//         q.pop(0)
//         q.append(i)
//         while counts[s[q[0]]] < 0:
//           counts[s[q[0]]]+=1
//           q.pop(0)
//       else:
//         counts[s[i]]-=1
//         q.append(i)
//         if counts[s[i]] >= 0:
//           len_t-=1
      
//       if len_t == 0:
//         length = q[-1] - q[0] + 1
//         if length < maxLength:
//           maxLength = length
//         len_t+=1
//         counts[s[q[0]]]+=1
//         q.pop(0)
//         while counts[s[q[0]]] < 0:
//           counts[s[q[0]]]+=1
//           q.pop(0)
//   if maxLength == len(s)+1:
//     return -1
//   else:
//     return maxLength



function minLengthSubstring(s, t) {
  // Write your code here
  maxLength = s.length + 1;
	let q = []
	let len_t = t.length;
	let counts = {}
	for (let i of t) {
		counts[i] = counts[i] ? 1 : counts[i]+1
	}
	for (let i of s) {
			if (counts[s[i]]) {
				if (q.length > 0 && s[i] == s[q[0]] && counts[s[i]] === 0) {
					q.pop(0)
					q.append(i)
					while (counts[s[q[0]]] < 0)
						counts[s[q[0]]]+=1
						q.pop(0)
				} else {
					counts[s[i]]-=1
					q.append(i)
					if (counts[s[i]] >= 0) {
						len_t-=1
					}
				}
				
				if (len_t == 0) {
					let length = q[-1] - q[0] + 1
					if (length < maxLength) {
						maxLength = length
					}
					len_t+=1
					counts[s[q[0]]]+=1
					q.pop(0)
					while (counts[s[q[0]]] < 0) {
						counts[s[q[0]]]+=1
						q.pop(0)
					}
				}
			}
		}
	
	if (maxLength === s.length + 1) {
		return -1
	} else {
		return maxLength
	}

}









// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printInteger(n) {
  var out = '[' + n + ']';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = (expected == output);
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printInteger(expected);
    out += ' Your output: ';
    out += printInteger(output);
    console.log(out);
  }
  test_case_number++;
}

var s_1 = "dcbefebce";
var t_1 = "fd";
var expected_1 = 5;
var output_1 = minLengthSubstring(s_1, t_1);
check(expected_1, output_1);

var s_2 = "bfbeadbcbcbfeaaeefcddcccbbbfaaafdbebedddf";
var t_2 = "cbccfafebccdccebdd";
var expected_2 = -1;
var output_2 = minLengthSubstring(s_2, t_2);
check(expected_2, output_2);

// Add your own test cases here
