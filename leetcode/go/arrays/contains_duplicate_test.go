package contains_duplicate_test

import (
	"testing"
)

func ContainsDuplicate(nums []int) bool {
	mapped := make(map[int]bool)

	for _, n := range nums {
		if mapped[n] {
			return true
		}

		mapped[n] = true
	}

	return false
}

func TestHasDuplicate(t *testing.T) {
	got := ContainsDuplicate([]int{1, 2, 3, 1})
	if !got {
		t.Error("should be true:", got)
	}
}

func TestHasDuplicates(t *testing.T) {
	got := ContainsDuplicate([]int{1, 1, 1, 3, 3, 4, 3, 2, 4, 2})
	if !got {
		t.Error("should be true:", got)
	}
}

func TestDoesNotHaveDuplicates(t *testing.T) {
	got := ContainsDuplicate([]int{1, 2, 3, 4})
	if got {
		t.Error("should be false:", got)
	}
}
