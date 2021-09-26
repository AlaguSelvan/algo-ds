/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Iteration T O(N) S O(N)
var reverseList = function(head) {
  let prev = null;
  while(head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};


// Recursion T O(N) S O(N)
const reverseList = (head) => {
	if(!head || !head.next) return head;
	let reversedListHead = reverseList(head.next);
	head.next.next = head;
	head.next = null;
	return reversedListHead;
}


let node = new ListNode(1)
node.next =	new ListNode(2)
node.next.next = new ListNode(3)
node.next.next.next = new ListNode(4)


const output = reverseList(node)

console.log(output)
