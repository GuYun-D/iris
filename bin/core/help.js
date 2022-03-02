const program = require('commander')

const helpOptions = () => {
  program.option('-i --iris', 'a cli')
  program.option('-d --dest <dest>', 'a destination folder, for example, -d /src/components')
  program.option('-f --framework <framework>', 'your framework (Currently only Vue is supported)')

  // 监听--help，可以修改help的内容
  program.on('--help', function () {
    console.log("");
    console.log("Others:");
    console.log("   other options ~ ");
  })
}

module.exports = helpOptions