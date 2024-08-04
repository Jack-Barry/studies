# `leetcode-typescript`

This is a simple project for being able to work on LeetCode problems and catalog
solutions with tests to verify correctness.

This project was created using `bun init` in bun v1.0.35. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

To install dependencies:

```bash
bun install
```

To run tests:

```bash
bun test 
```

More info on `bun test` can be found [here](https://bun.sh/docs/cli/test).

To scaffold a new challenge problem:

```bash
bun run scripts/newChallenge.ts <CHALLENGE_TYPE> <CHALLENGE_NAME>
```

- Replace `<CHALLENGE_TYPE>` with a dir name from `src`, e.g. `arrays` or `strings`
- Replace `<CHALLENGE_NAME>` with a camelCased name for the challenge, e.g. `containsDuplicate`