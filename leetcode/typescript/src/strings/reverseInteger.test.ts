import { describe, expect, test } from 'bun:test'

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/
const MAX_VALUE = 2 ** 31
function reverse(x: number): number {
  const isNegative = x < 0
  const unsignedValue = parseInt(x.toString().replace('-', ' ').split('').reverse().join(''))
  const signedValue = isNegative ? -unsignedValue : unsignedValue

  if (signedValue < -MAX_VALUE || signedValue >= MAX_VALUE) {
    return 0
  }

  return signedValue
}

describe("strings: reverseInteger", () => {
  test("handles positive integers", () => {
    expect(reverse(123)).toBe(321)

  });

  test("handles negative integers", () => {
    expect(reverse(-123)).toBe(-321)
  })

  test("handles trailing zeros", () => {
    expect(reverse(120)).toBe(21)
  });

  test("returns 0 for numbers out of bounds", () => {
    expect(reverse(1534236469)).toBe(0)
  });
});