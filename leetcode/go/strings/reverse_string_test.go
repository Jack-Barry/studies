package reverse_string_test

import (
	"bytes"
	"testing"
)

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/
func reverseString(s []byte) {
	right := len(s) - 1

	for left := 0; left < right; left++ {
		temp := s[left]

		s[left] = s[right]
		s[right] = temp

		right--
	}
}

func TestReverseString(t *testing.T) {
	expectedBytes := []byte("olleh")
	str := []byte{'h', 'e', 'l', 'l', 'o'}
	reverseString(str)

	if !bytes.Equal(str, expectedBytes) {
		t.Errorf("expected %v but got %v", expectedBytes, str)
	}
}
