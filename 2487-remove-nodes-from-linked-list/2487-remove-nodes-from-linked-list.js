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
var removeNodes = function(head) {
    let pointer = head
    let prev = null
    while (pointer.next){
        pointer.prev = prev
        prev = pointer
        pointer = pointer.next
        
    }
    pointer.prev = prev
    let max = pointer.val
    while (pointer.prev){
        if (pointer.val >= max) {max = pointer.val} else {pointer.prev.next = pointer.next}
        pointer = pointer.prev
    }
    if (pointer.val < max) return pointer.next
    return pointer
};