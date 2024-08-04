import { describe, expect, test } from 'bun:test'

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/
function reverseString(s: string[]): void {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    let temp = s[left]
    s[left] = s[right]
    s[right] = temp

    left++
    right--
  }
};

describe("strings: reverseString", () => {
  test("reverses string in place", () => {
    let str = ['h', 'e', 'l', 'l', 'o']
    reverseString(str)
    expect(str).toStrictEqual(['o', 'l', 'l', 'e', 'h'])
  });
});
