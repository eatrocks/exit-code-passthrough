## Controlling Exit Codes

This repo is a simple project demonstrating how to respond to non-zero exit codes coming from the depths of an npm script execution. And specifically to control which exit code gets returned.

- `npm run verify:success` demonstrates a successful run as a baseline
- `npm run release` demonstrates having the `prerelease` command halt the `release` when a failure exit code is detected in a child process
