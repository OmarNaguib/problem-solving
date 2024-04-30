/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0
    const result = new ListNode()
    let resultPointer = result
    while ( l1 || l2 || carry ){
        resultPointer.next = new ListNode()
        resultPointer = resultPointer.next
        const addition = (l1?.val || 0) + (l2?.val || 0) + carry
        resultPointer.val = addition % 10
        carry = Math.floor(addition / 10)
        if (l1) l1 = l1.next
        if (l2) l2=l2.next
    }
    return result.next
};