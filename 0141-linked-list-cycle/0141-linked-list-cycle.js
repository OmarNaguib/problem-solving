/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const map = new Map()
    while (head?.next){
        if (map.get(head)) return true
        map.set(head,1)
        head=head.next
    }
    return false
};