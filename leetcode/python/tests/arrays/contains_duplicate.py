import unittest

def contains_duplicate(nums):
  seen = {}

  for n in nums:
    if seen.get(n):
      return True
    
    seen[n] = True
  
  return False

class TestContainsDuplicate(unittest.TestCase):
  def test_has_duplicate(self):
    self.assertTrue(contains_duplicate([1, 2, 3, 1]))

  def test_has_duplicates(self):
    self.assertTrue(contains_duplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))

  def test_does_not_have_duplicates(self):
    self.assertFalse(contains_duplicate([1, 2, 3, 4]))

if __name__ == '__main__':
  unittest.main()