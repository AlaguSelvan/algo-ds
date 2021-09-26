/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Recursive T O(N) S (O(N))
// var mergeTwoLists = function(l1, l2) {
//   if (!l1) return l2;
//   if (!l2) return l1;
//   if (l1.val < l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   } else {
//     l2.next = mergeTwoLists(l1, l2.next);
//     return l2;
//   }
// };

// Iterative T O(N) S (O(1))

const mergeTwoLists = (l1, l2) => {
  let dummyHead = new ListNode(0);
  let tempHead = dummyHead;
  while(l1 && l2) {
    if (l1.val < l2.val) {
      tempHead.next = l1;
      l1 = l1.next;
    } else {
      tempHead.next = l2;
      l2 = l2.next;
    }
    tempHead = tempHead.next;
  }

  if(l1) {
    tempHead = l1;
    l1 = l1.next;
  }

  if(l2) {
    tempHead = l2;
    l2 = l2.next;
  }

  return dummyHead.next;
}

let l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(4)

console.log(l1)

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

console.log(l2)

const output = mergeTwoLists(l1, l2)
