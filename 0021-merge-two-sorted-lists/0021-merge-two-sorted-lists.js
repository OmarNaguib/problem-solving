var mergeTwoLists = function (list1, list2) {
  let output = new ListNode();
  let outputPointer = output;
  if (list1 == null) return list2;
  if (list2 == null) return list1;

  while (true) {
    if (list1 == null && list2 == null) break;

    if (list1.val < list2.val) {
      outputPointer.val = list1.val;
      list1 = list1.next;
    } else {
      outputPointer.val = list2.val;
      list2 = list2.next;
    }

    if (list1 == null) {
      outputPointer.next = list2;
      break;
    }
    if (list2 == null) {
      outputPointer.next = list1;
      break;
    }

    outputPointer.next = new ListNode();
    outputPointer = outputPointer.next;
  }
  return output;
};