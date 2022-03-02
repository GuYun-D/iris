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

console.log("iris 启动啦。 哈哈哈"); 