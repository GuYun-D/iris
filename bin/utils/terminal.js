/**
 * 执行终端命令
 * 需要开启一个新的进程，使用spawn
 */

const { spawn } = require('child_process')
const commandSpawn = (...args) => {
  console.log(args);
  return new Promise((resolve, reject) => {
    // 返回值是一个子进程
    const childrenProcess = spawn(...args)
    childrenProcess.stdout.pipe(process.stdout)
    childrenProcess.stderr.pipe(process.stderr)
    childrenProcess.on('close', function () {
      resolve()
    })
  })
}

module.exports = {
  commandSpawn
}