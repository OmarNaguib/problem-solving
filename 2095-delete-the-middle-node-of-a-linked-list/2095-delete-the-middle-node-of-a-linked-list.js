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
var deleteMiddle = function(head) {
    if (!head.next) return null
    let slow = head
    let fast = head?.next
    let prevSlow = slow;
    while (slow && fast){
        prevSlow = slow
        slow=slow.next
        fast=fast.next?.next
    }
    prevSlow.next = prevSlow.next?.next ?? null
    return head
    
};