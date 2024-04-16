/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummyHead = head;
  const findLength = (head) => {
    let count = 0;
    while (head) {
      count++;
      head = head.next;
    }
    return count;
  };
  let reverseIndex = findLength(dummyHead);
  if (reverseIndex === n) return dummyHead.next;
  reverseIndex--;

  while (dummyHead) {
    if (reverseIndex === n) {
      dummyHead.next = dummyHead.next?.next ?? null;
      return head;
    }
    dummyHead = dummyHead.next;
    reverseIndex--;
  }
  return head;
};