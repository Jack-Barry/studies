import { describe, expect, test } from 'bun:test'

/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

/**
 Do not return anything, modify it in-place instead.
 */
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/553/
function deleteNode(node: ListNode | null): void {
  if (!node || !node.next) {
    return
  }

  node.val = node.next.val
  node.next = node.next.next
};

describe("linkedLists: deleteNodeInLinkedList", () => {
  test("removes node from linked list", () => {
    const tail = new ListNode(9)
    const node3 = new ListNode(1, tail)
    const node2 = new ListNode(5, node3)
    const head = new ListNode(4, node2)

    deleteNode(node2)
    expect(head.val).toBe(4)
    expect(head.next?.val).toBe(1)
    expect(head.next?.next?.val).toBe(9)
    expect(head.next?.next?.next).toBeNull()
  });
});