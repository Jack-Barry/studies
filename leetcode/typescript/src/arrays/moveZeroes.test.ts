import { describe, expect, test } from 'bun:test'

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/
function moveZeroes(nums: number[]): void {
  let i = 0
  let j = 1

  while (j < nums.length) {
    if (nums[i] === 0) {
      const temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
      j++
      continue
    }

    i++
    if (j <= i) {
      j = i + 1
    }
  }
};

describe("arrays: moveZeroes", () => {
  test("moves zeroes to end", () => {
    let arr = [0, 1, 0, 3, 12]
    moveZeroes(arr)
    expect(arr).toStrictEqual([1, 3, 12, 0, 0])

    arr = [0]
    moveZeroes(arr)
    expect(arr).toStrictEqual([0])

    arr = [2, 1]
    moveZeroes(arr)
    expect(arr).toStrictEqual([2, 1])
  });
});