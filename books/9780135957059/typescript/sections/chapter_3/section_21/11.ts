import { mkdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { relative, resolve } from "node:path";

import { load } from "js-yaml";

const rootDir = resolve(__dirname, "../../../../..");
const subPath = relative(rootDir, __dirname);
const tempDir = resolve(tmpdir(), "studyNotesFixtures", subPath);

run();
async function run() {
  await setup();
  await doStuff();
  await teardown();
}

async function setup() {
  log("Performing setup");
  log(`Creating tempDir ${tempDir}`);
  await mkdir(tempDir, { recursive: true });
  log("Writing YAML files to directory");
  await writeFile(
    resolve(tempDir, "config_1.yaml"),
    "stuff:\n  name: Stuff\n  foo: 1",
    "utf8"
  );
  await writeFile(
    resolve(tempDir, "config_2.yaml"),
    "stuff:\n  name: Stuff\n  foo: 2",
    "utf8"
  );
  await writeFile(
    resolve(tempDir, "config_3.yaml"),
    "stuff:\n  name: Stuff\n  foo: 3",
    "utf8"
  );
  log("Done setting up");
}

async function doStuff() {
  log("Reading as YAML");
  const config_1 = await readFile(resolve(tempDir, "config_1.yaml"), "utf8");
  const config_2 = await readFile(resolve(tempDir, "config_2.yaml"), "utf8");
  const config_3 = await readFile(resolve(tempDir, "config_3.yaml"), "utf8");
  log("config_1", config_1);
  log("config_2", config_2);
  log("config_3", config_3);

  console.log("Presenting as JSON");
  log("config_1", JSON.stringify(load(config_1)));
  log("config_2", JSON.stringify(load(config_2)));
  log("config_3", JSON.stringify(load(config_3)));
}

async function teardown() {
  log("Performing teardown");
  const dirExists = await fileOrDirExists(tempDir);

  if (dirExists) {
    log(`Removing tempDir: ${tempDir}`);
    await rm(tempDir, { recursive: true, force: true });
  }

  log("Done tearing down");
}

async function fileOrDirExists(path: string) {
  try {
    return await stat(tempDir);
  } catch (e) {
    if ((e as { code: string }).code === "ENOENT") {
      return false;
    }

    throw e;
  }
}

function log(...args: string[]) {
  const datePrefix = `[${new Date().toISOString()}]: `;
  console.log(`${datePrefix}${args.join("\n")}`);
}
