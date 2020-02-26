#!/usr/bin/env node
const child = require("child_process");

process.on("SIGINT", function() {
  console.log("Goodbye!");
  process.exit(130);
});

const main = async () => {
  try {
    const goal = process.argv[2];
    const command = goal === "succeed" ? "cat stuff.txt" : "cat missing.txt";
    console.log("prerelease running, goal: " + goal);

    let exitCode = 0; // non-zero exit codes will throw so assume zero
    try {
      execThrowNonZero(command);
    } catch (error) {
      exitCode = error.status;
    }

    process.exit(exitCode);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const execThrowNonZero = command => {
  try {
    child.execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(
      `${command} failed! Please look above for corresponding error output.`
    );
    throw error;
  }
  return "";
};

main();
