// 开数组
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
var mergeTwoLists = function (l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  var arr = []
  while (l1 != null && l2 != null) {
    if (l1.val > l2.val) {
      arr.push(l2)
      l2 = l2.next
    } else {
      arr.push(l1)
      l1 = l1.next
    }
  }
  while (l1 != null) {
    arr.push(l1)
    l1 = l1.next
  }
  while (l2 != null) {
    arr.push(l2)
    l2 = l2.next
  }
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1]
  }
  arr[arr.length - 1].next = null
  return arr[0]
}

// 递归
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
var mergeTwoLists = function (l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  if (l1.val > l2.val) {
    l2.next = mergeTwoLists(l2.next, l1)
    return l2
  } else {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }

}

// 迭代
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
var mergeTwoLists = function (l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  let prev = new ListNode(0)
  let firtNode = prev
  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      prev.next = l1
      l1 = l1.next
    } else {
      prev.next = l2
      l2 = l2.next
    }
    prev = prev.next
  }
  prev.next = l1 === null ? l2 : l1
  return firtNode.next
}