const execSync = require('child_process').execSync;
const toPlatform = require('./to-platform');

module.exports = function () {
  return execSync(`${toPlatform('git', 'exe')} rev-parse --short HEAD`)
    .toString()
    .trim();
};
