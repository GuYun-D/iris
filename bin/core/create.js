const program = require('commander')
const {
  createProjectAction,
  addComponentAction,
  addPageAction,
  addStoreAction
} = require('./actions')

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
    .description("add a vue component, for example: iris addCpn login [-d src/login]")
    .action((name) => {
      addComponentAction(name, program._optionValues.dest || "src/components")
    })

  program.command("addPage <page>")
    .description("add vue page and router config, for example: iris addPage login [-d src/page]")
    .action((page) => {
      addPageAction(page, program._optionValues.dest || "src/pages")
    })

  program
    .command("addStore <store>")
    .description("add vuex module, for exmaple: iris addStore login [-d src/store/modules]")
    .action((store) => {
      addStoreAction(store, program._optionValues.dest || "src/store/modules")
    })
}

module.exports = createCommands