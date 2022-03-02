#!/usr/bin/env node

/**
 * #! : 是一个shebang，用来找当前计算机的环境，
 * 必须写在最前面
 * /usr: user的简写
 * /env: 环境
 * node：使用node执行后续代码
 * 
 * 配置bin: 在package.json中配置bin
    "bin": {
      "iris": "index.js"
    },
    告诉命令行执行哪个命令 -> iris
 * 在命令行中执行：npm link 将该工具配置到node全局 然后就可以执行iris了
 */

const program = require("commander")
const helpOptions = require('./bin/core/help')
const createCommands = require('./bin/core/create')

/**
 * 使用commander库进行参数解析
 */

/**
 * 版本号查看
 */
program.version(require('./package.json').version, '-v, --version')
program.version(require('./package.json').version)

/**
 * 增加可选参数: module
 */
helpOptions()

// 指令集初始化
createCommands()


program.parse(process.argv)