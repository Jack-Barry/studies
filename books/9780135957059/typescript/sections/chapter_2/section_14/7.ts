/**
 * 4pm
 * 7:38pm
 * 23:42
 * 3:16
 * 3:16am
 */
const TIME_REGEX = /(^[0-2]{0,1}[0-9]):*([0-5][0-9])*(am|pm)*/;

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

function getTime(str: string) {
  const matches = str.match(TIME_REGEX);
  if (!matches) {
    console.log("no match");
    return;
  }

  const [_, hours, minutes, ampm] = matches;

  let parsedHour = parseInt(hours ?? "0");
  const parsedMinutes = parseInt(minutes ?? "0");
  if (ampm === "pm" && parsedHour < 12) {
    parsedHour += 12;
  }

  console.log(
    `Value in military time: ${str.padStart(7, " ")} -> ${parsedHour
      .toString()
      .padStart(2, " ")}:${parsedMinutes.toString().padStart(2, "0")}`
  );
}

function printSeparator() {
  console.log("-".repeat(40));
}
