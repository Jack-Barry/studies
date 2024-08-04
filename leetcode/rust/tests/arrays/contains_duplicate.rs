fn contains_duplicate(arr: &[i32]) -> bool {
    let mut seen = std::collections::HashSet::new();

    for &num in arr {
        if !seen.insert(num) {
            return true;
        }
    }

    false
}

#[test]
fn contains_duplicate_when_duplicate_present() {
    assert!(contains_duplicate(&[1, 2, 3, 1]))
}

#[test]
fn contains_duplicate_when_duplicates_present() {
    assert!(contains_duplicate(&[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
}

#[test]
fn contains_duplicate_when_no_duplicates_present() {
    assert!(!contains_duplicate(&[1, 2, 3, 4]))
}
