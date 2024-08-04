/**
 * P 2 # Select pen 2
 * D   # pen down
 * W 2 # draw west 2cm
 * N 1 # then north 1cm
 * E 2 # then east 2cm
 * S 1 # then south 1cm
 * U   # pen up
 */

const availableCommands = {
  P: (pen: number) => {
    console.log(`Selected pen ${pen}`);
  },
  D: () => {
    console.log("Pen down");
  },
  U: () => {
    console.log("Pen up");
  },
  N: (distance: number) => {
    console.log(`Draw north ${distance}cm`);
  },
  S: (distance: number) => {
    console.log(`Draw south ${distance}cm`);
  },
  E: (distance: number) => {
    console.log(`Draw east ${distance}cm`);
  },
  W: (distance: number) => {
    console.log(`Draw west ${distance}cm`);
  },
};

function parseCommands(commands: string) {
  const commandArray = commands.split("\n");
  for (let command of commandArray) {
    const [commandType, ...args] = command.split(" ");
    availableCommands[commandType as keyof typeof availableCommands](
      parseInt(args[0])
    );
  }
}

run();
function run() {
  parseCommands("P 2\nD\nW 2\nN 1\nE 2\nS 1\nU");
}
