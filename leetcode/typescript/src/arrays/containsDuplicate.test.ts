import { describe, expect, test } from "bun:test"

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
function containsDuplicate(nums: number[]): boolean {
  const mapped: Record<number, true> = {}

  for (const n of nums) {
    if (mapped[n]) {
      return true
    }

    mapped[n] = true
  }

  return false
};

describe("arrays: containsDuplicate", () => {
  test("has duplicate", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true)
  });

  test("has duplicates", () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true)
  });

  test("does not have duplicates", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false)
  });
});

