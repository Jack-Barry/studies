import { describe, expect, test } from 'bun:test'

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/
function longestCommonPrefix(strs: string[]): string {
  strs.sort()
  let prefix = ""

  const firstStr = strs[0]
  const lastStr = strs[strs.length - 1]

  for (let i = 0; i < Math.min(firstStr.length, lastStr.length); i++) {
    if (firstStr[i] !== lastStr[i]) {
      return prefix
    }

    prefix += firstStr[i]
  }

  return prefix
};


describe("strings: longestCommonPrefix", () => {
  test("returns longest common prefix when there is one", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl")
  })

  test("returns empty string when there is no common prefix", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("")
  })

  test("handles empty string input(s)", () => {
    expect(longestCommonPrefix([""])).toBe("")
    expect(longestCommonPrefix(["", ""])).toBe("")
  })
})