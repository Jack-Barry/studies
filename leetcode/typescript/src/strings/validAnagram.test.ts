import { describe, expect, test } from 'bun:test'

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/
function isAnagram(s: string, t: string): boolean {
  const letterCounts: Record<string, number> = {}

  for (const letter of s) {
    if (!letterCounts[letter]) {
      letterCounts[letter] = 1
    } else {
      letterCounts[letter]++
    }
  }

  for (const letter of t) {
    if (!letterCounts[letter]) {
      return false
    } else {
      letterCounts[letter]--
    }
  }

  return Object.values(letterCounts).every((v) => v === 0)
};

describe("strings: validAnagram", () => {
  test("returns true for valid anagrams", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true)
  });

  test("returns false for non-anagrams", () => {
    expect(isAnagram("rat", "car")).toBe(false)
  });
});
