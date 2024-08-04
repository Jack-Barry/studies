import { describe, expect, test } from 'bun:test'

function maxProfit(prices: number[]): number {
  let profit = 0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      profit += prices[i + 1] - prices[i]
    }
  }

  return profit
};

describe("arrays: bestTimeToBuyAndSellStockII", () => {
  test("when price continually goes up", () => {
    // Last price is highest, so sale is 5 - 1
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4)
  });

  test("when price continually goes down", () => {
    // No opportunities to sell at a profit
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
  });

  test("when price fluctuates", () => {
    // Buy at 1, sell at 5 = 4
    // Buy at 3, sell at 6 = 3
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7)

    // Buy at 2, sell at 6 = 4
    // Buy at 0, sell at 3 = 3
    expect(maxProfit([3, 2, 6, 5, 0, 3])).toBe(7)
  });
});