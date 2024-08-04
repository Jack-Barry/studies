import unittest

# https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/
class Solution(object):
    def reverseString(self, s):
        """
        :type s: List[str]
        :rtype: None Do not return anything, modify s in-place instead.
        """
        left = 0
        right = len(s) - 1

        while left < right:
          temp = s[left]

          s[left] = s[right]
          s[right] = temp

          left += 1
          right -= 1

class TestReverseString(unittest.TestCase):
  def test_reverse_string(self):
    str = ['h', 'e', 'l', 'l', 'o']
    Solution().reverseString(str)
    self.assertListEqual(str, ['o', 'l', 'l', 'e', 'h'])

if __name__ == '__main__':
  unittest.main()