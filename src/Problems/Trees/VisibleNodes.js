// Add any extra import statements you may need here

// Definition for a binary tree node
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// Add any helper functions you may need here

// function visibleNodes(root) {
//   // Write your code here
//   const output = [];
//   const traverse = (root, array = [], depth = 0) => {
//     if (!root) return output;
//     if (!array[depth]) array[depth] = root.val;
//     traverse(root.left, array, depth + 1);
//     traverse(root.right, array, depth + 1);
//   };
//   traverse(root, output);
//   return output.length;
// }

function visibleNodes(root) {
  // Write your code here
  const queue = [root];
  const visited = [];
  queue.push(this.root);
  let depth = 0;
  while (queue.length) {
    const node = queue.shift();
    visited[depth] = node.val;
    depth++;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  console.log(visited)
  return visited.length;
}

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printInteger(n) {
  const out = `[${n}]`;
  return out;
}

let test_case_number = 1;

function check(expected, output) {
  const result = (expected == output);
  const rightTick = '\u2713';
  const wrongTick = '\u2717';
  if (result) {
    var out = `${rightTick} Test #${test_case_number}`;
    console.log(out);
  } else {
    var out = '';
    out += `${wrongTick} Test #${test_case_number}: Expected `;
    out += printInteger(expected);
    out += ' Your output: ';
    out += printInteger(output);
    console.log(out);
  }
  test_case_number++;
}

const root1 = new TreeNode(8);
root1.left = new TreeNode(3);
root1.right = new TreeNode(10);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(6);
root1.left.right.left = new TreeNode(4);
root1.left.right.right = new TreeNode(7);
root1.right.right = new TreeNode(14);
root1.right.right.left = new TreeNode(13);
const expected_1 = 4;
const output_1 = visibleNodes(root1);
check(expected_1, output_1);

const root2 = new TreeNode(10);
root2.left = new TreeNode(8);
root2.right = new TreeNode(15);
root2.left.left = new TreeNode(4);
root2.left.left.right = new TreeNode(5);
root2.left.left.right.right = new TreeNode(6);
root2.right.left = new TreeNode(14);
root2.right.right = new TreeNode(16);
const expected_2 = 5;
const output_2 = visibleNodes(root2);
check(expected_2, output_2);

// Add your own test cases here
