/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
  if (headA == null || headB == null) return null

  let pA = headA, pB = headB

  // 不管等长或者不等长，因为length(LA+LB) === length(LB+LA)，所以首尾相连即可找到公共交点
  // 等长：在到达null前会出现 pA == pB
  // 不等长：A到达null后，从B开始，B到达null后从A开始
  while (pA != pB) {
      pA = pA == null ? headB : pA.next
      pB = pB == null ? headA : pB.next
  }

  return pA
};