const program = require('commander')
const { createProjectAction, addComponentAction } = require('./actions')

/**
 * 创建指令集
 * 类似于 iris create name的指令
 */
const createCommands = () => {
  // 创建的指令，<project> 项目名称; [others...] 其他参数
  program
    .command('create <project> [others...]')
    .description('clone a repository into a folder')
    // <project> 项目名称; [others...]：Array 其他参数
    .action((project, others) => {
      createProjectAction(project)
    })

  // 添加组件的命令
  program.command("addCpn <name>")
    .description("add a vue component, for example: iris addCpn login -d src/login")
    .action(addComponentAction)
}

module.exports = createCommands