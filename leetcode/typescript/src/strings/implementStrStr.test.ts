import { describe, expect, test } from 'bun:test'

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/885/
function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle)
}

describe("strings: implementStrStr", () => {
  test("returns index of beginning of first occurrence", () => {
    expect(strStr("sadbutsad", "sad")).toBe(0)
    expect(strStr("truebutsad", "sad")).toBe(7)
    expect(strStr("mississippi", "issip")).toBe(4)
  });

  test("returns -1 when needle is not in haystack", () => {
    expect(strStr("leetcode", "leeto")).toBe(-1)
  });
});