import { describe, expect, test } from 'bun:test'

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/
function intersect(nums1: number[], nums2: number[]): number[] {
  const numsMap1: Record<number, number> = {}
  const numsMap2: Record<number, number> = {}

  for (const n of nums1) {
    if (!numsMap1[n]) {
      numsMap1[n] = 0
    }
    numsMap1[n]++
  }

  for (const n of nums2) {
    if (!numsMap2[n]) {
      numsMap2[n] = 0
    }
    numsMap2[n]++
  }

  const result: number[] = []
  Object.entries(numsMap1).forEach(([n, count1]) => {
    const key = parseInt(n)
    const count2 = numsMap2[key] || 0
    for (let i = 1; i <= Math.min(count1, count2); i++) {
      result.push(key)
    }
  })
  return result
};

describe("arrays: intersectionOfTwoArraysII", () => {
  test("finds the intersection", () => {
    expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2])
    expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9])
  });
});