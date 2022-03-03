const fs = require('fs')
const mkdirFn = require('./mkdir')

/**
 * 将ejs编译之后的内容写入文件中
 * @param {String} path 文件路径
 * @param {String} content 文件内容
 */
const writeToFile = (path, content) => {
  // 判断path是否存在，如果不存在就进行创建
  // if (mkdirFn(path)) {
    return fs.promises.writeFile(path, content)
  // }
}

module.exports = {
  writeToFile
}