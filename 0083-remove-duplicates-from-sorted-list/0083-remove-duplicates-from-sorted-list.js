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
var deleteDuplicates = function (head) {
  if (!head) return null;
  let pointer = head;
  while (pointer.next) {
    if (pointer.next.val === pointer.val) {
      pointer.next = pointer.next.next;
    } else {
      past = pointer.val;
      pointer = pointer.next;
    }
  }
  return head;
};