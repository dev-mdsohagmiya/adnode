const { spawn } = require("child_process");

// Define the coordinates of the tap event
const x = 500;
const y = 1000;

// Use the adb tool to send the tap event
const cmd = spawn("adb", ["shell", "input", "tap", x, y]);

// Log any errors that occur
cmd.stderr.on("data", (data) => {
  console.error(`adb error: ${data}`);
});

// Log the output of the command
cmd.stdout.on("data", (data) => {
  console.log(`adb output: ${data}`);
});

// Log a message when the command completes
cmd.on("close", (code) => {
  console.log(`adb command exited with code ${code}`);
});
