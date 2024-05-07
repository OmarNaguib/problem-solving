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
var doubleIt = function(head) {
    let prev = null;
    while (head){
        const tempNext = head.next
        head.next =prev
        prev = head
        head = tempNext
    }
    head = prev
    
    let carry = 0;
    let result = new ListNode()
    let resultPointer = result
    while(head){
        const summationresult = head.val * 2 + carry
        const digit = summationresult % 10
        carry = Math.floor(summationresult/10)
        resultPointer.next = new ListNode(digit)
        resultPointer= resultPointer.next
        head = head.next
    }
    if (carry) resultPointer.next = new ListNode(carry)
    
    result = result.next;
    prev = null;
    while (result){
        const tempNext = result.next
        result.next =prev
        prev = result
        result = tempNext
    }
    
    return prev
};