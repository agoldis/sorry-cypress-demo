const spawn = require('child_process').spawn;
const chalk = require('chalk');
const toPlatform = require('./utils/to-platform');
const getCommitHash = require('./utils/commit-hash');

console.log(chalk.blue(`Starting e2e tests...`));
const exiting = false;
const commitHash = getCommitHash();
const cypress = spawn(
  toPlatform('currents'),
  ['run', '--parallel', '--record', '--key', 'Vb1U1Qin4kPB08Zx', '--headless', '--browser', 'chrome', '--ci-build-id', commitHash],
  { stdio: [0, 1, 2] }
);

/*const endProcessesBinded = endProcesses.bind(this);
process.on('SIGINT', endProcessesBinded);
process.on('SIGTERM', endProcessesBinded);

cypress.on('exit', (code) => {
  console.log('Finishing e2e tests...');
});

function endProcesses() {
  if (exiting) return;
  exiting = true;
  console.log('Exiting processes...');
  cypress.kill('SIGTERM');
  process.exit();
}*/
