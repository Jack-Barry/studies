import { describe, expect, test } from "bun:test"

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
function plusOne(digits: number[]): number[] {
  const lastIndex = digits.length - 1
  digits[lastIndex]++

  let addValue = 0
  for (let i = lastIndex; i >= 0; i--) {
    digits[i] = digits[i] + addValue
    if (digits[i] < 10) {
      addValue = 0
      continue
    }

    const remainder = digits[i] % 10
    addValue = Math.floor(digits[i] / 10)
    digits[i] = remainder

    if (i - 1 < 0) {
      digits.unshift(addValue)
    }
  }

  return digits
};

describe("arrays: plusOne", () => {
  test("numbers without carry over", () => {
    expect(plusOne([1, 2, 3])).toStrictEqual([1, 2, 4])
    expect(plusOne([4, 3, 2, 1])).toStrictEqual([4, 3, 2, 2])
  });

  test("numbers with carryover not requiring new significant digit", () => {
    expect(plusOne([1, 9, 9])).toStrictEqual([2, 0, 0])
  })

  test("numbers with carryover requiring new significant digit", () => {
    expect(plusOne([9])).toStrictEqual([1, 0])
  });
});
