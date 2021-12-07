/**
 * Description:
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
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

// iteration
let reverseList = function(head) {
  // edge case
  if (head === null || head.next === null) return head

  let todoHead = head
  let resultHead = null
  while (todoHead != null) {
    const temp = todoHead
    todoHead = todoHead.next
    temp.next = resultHead
    resultHead = temp
  }

  return resultHead
}

// Advance method: recursion
let reverseListRecursion = function(head) {
  // edge case
  if (head === null || head.next === null) return head

  // always returns the final list node
  const newHead = reverseListRecursion(head.next)

  // only reverse the most current one
  head.next.next = head

  // prevent ring
  head.next = null

  // this will always be the final list node
  return newHead
}