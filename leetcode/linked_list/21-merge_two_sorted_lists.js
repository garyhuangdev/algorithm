/**
 * Description:
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// iteration
// time complexity: O(n+m)
// space complexity: O(1)
const mergeTwoLists = function(list1, list2) {
  // new a list node as head
  const preHead = new ListNode(-1)
  let currentHead = preHead

  // compare and move on, step by step
  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      currentHead.next = list1
      list1 = list1.next
    } else {
      currentHead.next = list2
      list2 = list2.next
    }
    currentHead = currentHead.next
  }

  // merge the rest of nodes
  currentHead.next = list1 != null ? list1 : list2
  return preHead.next
}

// recursion
// time complexity: O(n+m)
// space complexity: O(n+m)
const mergeTwoListsRecursion = function(list1, list2) {
  // edge cases
  if (list1 == null) return list2
  else if (list2 == null) return list1

  // recursive merge remaining list nodes
  else if (list1.val < list2.val) {
    list1.next = mergeTwoListsRecursion(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoListsRecursion(list1, list2.next)
    return list2
  }
}