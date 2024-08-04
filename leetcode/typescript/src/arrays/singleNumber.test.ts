import { describe, expect, test } from 'bun:test'

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
/** 
 * I had to cheat on this one and submit a solution that broke the constant extra
 *   space constraint in order to see a valid solution. I'm writing some notes here
 *   to remember how this valid solution works.
 */
function singleNumber(nums: number[]): number {
  let res = 0

  for (const n of nums) {
    /** 
     * ^= is a bitwise "XOR" (exclusive or) operation
     * Basic XOR refresher:
     *   0 XOR 0 === 0
     *   1 XOR 0 === 1
     *   0 XOR 1 === 1
     *   1 XOR 1 === 0
     * 
     * As each n is iterated over, it is compared with the binary representation
     *  of what's already in res. If it cancels out the bits in res, then the value
     *  that is represented is cancelled out. See detailed examples below on how
     *  this bitwise math works out. 
     */
    res ^= n
  }

  return res
}

describe("arrays: singleNumber", () => {
  test("determines index of single number accurately", () => {
    /** 
     * i = 0, res = 2, arr[i] as binary: 10, res as binary: 10
     * i = 1, res = 0, arr[i] as binary: 10, res as binary: 0
     * i = 2, res = 1, arr[i] as binary: 1,  res as binary: 1
     */
    expect(singleNumber([2, 2, 1])).toBe(1)
    /** 
     * i = 0, res = 4, arr[i] as binary: 100, res as binary: 100
     * i = 1, res = 5, arr[i] as binary: 1,   res as binary: 101
     * i = 2, res = 7, arr[i] as binary: 10,  res as binary: 111
     * i = 3, res = 6, arr[i] as binary: 1,   res as binary: 110
     * i = 4, res = 4, arr[i] as binary: 10,  res as binary: 100
     */
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4)
    expect(singleNumber([1])).toBe(1)
  });
});