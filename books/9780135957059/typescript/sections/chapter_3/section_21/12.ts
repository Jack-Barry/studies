import { readdir, readFile, stat } from "node:fs/promises";
import { relative, resolve } from "node:path";

const rootDir = resolve(__dirname, "../../..");
const IGNORED_DIRS = ["node_modules"];
const IGNORED_FILES = ["bun.lockb", "package-lock.json"];
const CAMEL_CASE_REGEX = /\b[a-z]+(?:[A-Z][a-z]*)+\b/g;

type CamelCaseMatch = { file: string; camelCaseWords: string[] };
class CamelCaseTracker {
  matches: CamelCaseMatch[] = [];

  addMatch(match: CamelCaseMatch) {
    this.matches.push(match);
  }
}

const matchTracker = new CamelCaseTracker();

run();
async function run() {
  await readFilesInDir();
  log(JSON.stringify(matchTracker.matches, null, 2));
}

async function readFilesInDir(path = rootDir) {
  const items = await readdir(path);

  await Promise.all(
    items.map(async (item) => {
      const itemStat = await stat(resolve(path, item));
      const isDir = itemStat.isDirectory();
      if (!isDir) {
        if (IGNORED_FILES.includes(item)) {
          return;
        }

        const filePath = resolve(path, item);
        log(`Reading ${relative(rootDir, filePath)}`);
        const fileContents = await readFile(filePath, "utf8");
        const matches = await getCamelCaseInstances(fileContents);
        if (matches.length) {
          matchTracker.addMatch({ file: filePath, camelCaseWords: matches });
        }
        return;
      }

      if (IGNORED_DIRS.includes(item)) {
        return;
      }

      await readFilesInDir(resolve(path, item));
    })
  );
}

async function getCamelCaseInstances(text: string) {
  return Array.from(new Set(text.match(CAMEL_CASE_REGEX) || []));
}

function log(...args: Parameters<typeof console.log>) {
  const datePrefix = `[${new Date().toISOString()}]: `;
  console.log(`${datePrefix}${args.join("\n")}`);
}
