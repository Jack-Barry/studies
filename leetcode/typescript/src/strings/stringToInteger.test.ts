import { describe, expect, test } from 'bun:test'

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/
const MAX_VALUE = 2 ** 31
// I know this is an abomination...
function myAtoi(s: string): number {
  let nString = ""
  let sign = ""
  let scanningDigits = false

  for (const char of s) {
    const isWhitespace = char.match(/\s/)
    const isDigit = char.match(/[0-9]/)

    if (scanningDigits && (isWhitespace || !isDigit)) {
      break
    }

    if (!scanningDigits && isWhitespace) {
      continue
    }

    if (isDigit) {
      scanningDigits = true
      nString += char
      continue
    }

    const isSignSymbol = char.match(/-|\+/)
    if (!scanningDigits && !isSignSymbol) {
      break
    }

    if (!scanningDigits && isSignSymbol) {
      scanningDigits = true
      sign = char
      continue
    }
  }

  const parsed = parseInt(nString || '0')
  return (!sign || sign === '+') ? Math.min(parsed, MAX_VALUE - 1) : Math.max(-parsed, -MAX_VALUE)
}

describe("strings: stringToInteger", () => {
  test("translates string to an integer", () => {
    expect(myAtoi("42")).toBe(42)
  });

  test("handles negative numbers", () => {
    expect(myAtoi("   -42")).toBe(-42)
  });

  test("handles explicitly positive numbers", () => {
    expect(myAtoi("   +42")).toBe(42)
  });

  test("handles strings with extra content at end", () => {
    expect(myAtoi("4193 with words")).toBe(4193)
  });

  test("returns 0 for strings with extra content at beginning", () => {
    expect(myAtoi("words and 987")).toBe(0)
  });

  test("handles out of range numbers", () => {
    expect(myAtoi("91283472332")).toBe(MAX_VALUE - 1)
    expect(myAtoi("-91283472332")).toBe(-MAX_VALUE)
  });

  test("handles decimals", () => {
    expect(myAtoi("3.14159")).toBe(3)
  });

  test("handles multiple symbols", () => {
    expect(myAtoi("+-12")).toBe(0)
  });
});