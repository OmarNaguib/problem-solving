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
var reverseList = function (head) {
  let pastNode = null;
  let currentNode = head;
  while (currentNode) {
    const tempNext = currentNode.next;
    currentNode.next = pastNode;
    pastNode = currentNode
    currentNode = tempNext;
  }
  return pastNode;
};