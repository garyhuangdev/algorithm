// 环状链表2 需要找到环的入口
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  if (head == null) return null
  let quick = head, slow = head
  let hasCycle = false

  while (quick != null && quick.next != null) {
      quick = quick.next.next
      slow = slow.next

      if (slow == quick) {
          hasCycle = true
          break
      }
  }

  if (hasCycle) {
      quick = head
      while (quick != slow) {
          quick = quick.next
          slow = slow.next
      }
      return quick
  } else {
      return null
  }
};