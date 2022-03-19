/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  if (head == null || head.next == null) return null
  let fast = head, slow = head

  // 快指针先走n步
  for (let i = 0; i < n; i++) {
      fast = fast.next
  }

  // 删除第一个节点
  if (fast == null) {
      return head.next
  }

  // 快慢指针一起走
  while (fast.next != null) {
      fast = fast.next
      slow = slow.next
  }

  // 直接删除目标节点，并且由于JS的垃圾回收，目标节点不可达，因此没有造成内存泄漏
  slow.next = slow.next.next
  return head
}