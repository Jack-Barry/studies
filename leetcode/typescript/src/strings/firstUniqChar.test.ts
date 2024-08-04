import { describe, expect, test } from 'bun:test'

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/
function firstUniqChar(s: string): number {
  const charCounts: Record<string, number> = {}

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (!charCounts[char]) {
      charCounts[char] = 1
    } else {
      charCounts[char]++
    }
  }


  for (let i = 0; i < s.length; i++) {
    if (charCounts[s[i]] === 1) {
      return i
    }
  }

  return -1
};

describe("strings: firstUniqChar", () => {
  test("returns index when unique char is present", () => {
    expect(firstUniqChar('leetcode')).toBe(0)
    expect(firstUniqChar('loveleetcode')).toBe(2)
  });

  test("returns -1 when unique char is not present", () => {
    expect(firstUniqChar('aabb')).toBe(-1)
  });
});
