#!/usr/bin/env node

process.on("SIGINT", function() {
  console.log("Goodbye!");
  process.exit(130);
});

const main = async () => {
  try {
    console.log("release running");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

main();
