import { describe, expect, test } from "bun:test"

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
function removeDuplicates(nums: number[]): number {
  if (!nums.length) {
    return 0
  }

  let i = 0

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++

      const prev = nums[i]
      nums[i] = nums[j]
      nums[j] = prev
    }
  }

  return i + 1
};

describe("arrays: removeDuplicatesFromSortedArray", () => {
  test("empty array", () => {
    const input: number[] = []
    const result = removeDuplicates(input)
    expect(result).toBe(0)
  });

  test("single item array", () => {
    const input: number[] = [1]
    const result = removeDuplicates(input)
    expect(result).toBe(1)
  });

  test("array without duplicates", () => {
    const input: number[] = [1, 2, 3, 4, 5]
    const result = removeDuplicates(input)
    expect(result).toBe(5)
  });

  test("array with duplicates", () => {
    const inputs: { array: number[], expectedCount: number }[] = [{
      array: [1, 1, 2], expectedCount: 2
    }, {
      array: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expectedCount: 5
    }, {
      array: [0, 0, 1, 1, 1, 2, 2, 3], expectedCount: 4
    }]

    inputs.forEach(({ array, expectedCount }) => {
      const result = removeDuplicates(array)
      expect(result).toBe(expectedCount)
    })
  });
});