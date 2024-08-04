
import { describe, expect, test } from 'bun:test'

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/
function isPalindrome(s: string): boolean {
  const checkedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let left = 0
  let right = checkedString.length - 1

  while (left <= right) {
    if (checkedString[left] !== checkedString[right]) {
      return false
    }

    left++
    right--
  }

  return true
};

describe("strings: validPalindrome", () => {
  test("returns true for valid palindromes", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true)
  });

  test("returns false for non-palindromes", () => {
    expect(isPalindrome("race a car")).toBe(false)
    expect(isPalindrome("0P")).toBe(false)
  });

  test("returns true for empty strings", () => {
    expect(isPalindrome(" ")).toBe(true)
  })
});
