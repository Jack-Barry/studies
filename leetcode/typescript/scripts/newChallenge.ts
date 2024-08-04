import { exists, writeFile } from 'node:fs/promises'
import { relative, resolve } from 'node:path'

run()
async function run() {
  const [challengeType, challengeName] = process.argv.slice(2)
  const srcDir = resolve(__dirname, '../src')

  const challengeTypeDirExists = await exists(resolve(srcDir, challengeType))
  if (!challengeTypeDirExists) {
    throw new Error(`Challenge type directory does not exist: "src/${challengeType}"`)
  }

  if (!challengeName) {
    throw new Error('Must provide challenge name')
  }

  const challengePath = resolve(srcDir, challengeType, `${challengeName}.test.ts`)
  const challengeAlreadyExists = await exists(challengePath)
  if (challengeAlreadyExists) {
    throw new Error(`Challenge already exists at: ${relative(srcDir, challengePath)}`)
  }

  let challengeContent = "import { describe, expect, test } from 'bun:test'"
  challengeContent += "\n\n"
  challengeContent += `function ${challengeName}() {}`
  challengeContent += "\n\n"
  challengeContent += `describe("${challengeType}: ${challengeName}", () => {`
  challengeContent += "\n"
  challengeContent += '  test("placeholder", () => {'
  challengeContent += "\n"
  challengeContent += "    expect(true).toBe(false)"
  challengeContent += "\n"
  challengeContent += '  });'
  challengeContent += "\n"
  challengeContent += "});"

  await writeFile(challengePath, challengeContent, 'utf8')
}