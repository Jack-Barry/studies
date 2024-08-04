/**
 * Prints timestamp in military time, based on generated parser.
 *
 * To run: npx tspeg sections/chapter_2/section_14/6.peg sections/chapter_2/section_14/6.parser.ts && bun run sections/chapter_2/section_14/6.ts
 */
import { Parser } from "./6.parser";

run();
function run() {
  printSeparator();
  getTime("4pm");
  printSeparator();
  getTime("7:38pm");
  printSeparator();
  getTime("23:42");
  printSeparator();
  getTime("3:16");
  printSeparator();
  getTime("3:16am");
}

function printSeparator() {
  console.log("-".repeat(40));
}

function getTime(str: string) {
  const p = new Parser(str);
  const time = p.matchtime(0);
  let parsedHour = parseInt(time?.hour ?? "0");
  const parsedMinutes = parseInt(time?.minutes?.value ?? "0");
  const ampm = time?.ampm;

  if (parsedHour < 12 && ampm === "pm") {
    parsedHour += 12;
  }

  console.log(
    `Value in military time: ${str.padStart(
      7,
      " "
    )} -> ${parsedHour}:${parsedMinutes.toString().padStart(2, "0")}`
  );
}
