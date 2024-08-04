import { describe, expect, test } from 'bun:test'

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/
function twoSum(nums: number[], target: number): number[] {
  const hashMap: Record<number, number> = {}

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    const counterpart = target - n

    if (typeof hashMap[counterpart] !== 'undefined') {
      return [hashMap[counterpart], i]
    }

    hashMap[n] = i
  }

  return []
};

describe("arrays: twoSum", () => {
  test("finds the correct indices", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  });
});