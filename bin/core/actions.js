const { promisify } = require('util')
// downloadGitRepoFn 不支持使用promise，使用内置模块promisify转化，将他支持promise
const path = require('path')
const downloadGitRepoFn = promisify(require('download-git-repo'))
const { vueRepo } = require('../config/repo-config.js')
const { commandSpawn } = require('../utils/terminal')
// const open = require('open')
const { compileEjs } = require('../utils/compile.ejs')
const { writeToFile } = require("../utils/write.file")
const mkdirSync = require("../utils/mkdir")

/**
 * 创建项目
 * @param {String} project 项目名称
 */
const createProjectAction = async (project) => {
  console.log('\033[42;30m CREATING \033[40;32m Iris is creating a Vue project for you\033[0m')
  // clone
  try {
    await downloadGitRepoFn(vueRepo, project, { clone: true })
    /**
     * 执行终端命令 npm install
     * "npm": 使用啥命令
     * "[xxx, xxx]": 参数
     * "opptions": 在哪个文件夹中执行
     * 
     * 如果通过自己的脚手架自己执行npm会在window上报错，因为在window上实际上是执行npm.cmd的，所以需要对用户的当前的操作系统进行判断
     */
    const command = process.platform === "win32" ? "npm.cmd" : "npm"
    await commandSpawn(command, ["install"], {
      cwd: `./${project}`
    })
    // open
    // open("http://localhost:8080/")
    // npm run serve
    await commandSpawn(command, ["run", "serve"], {
      cwd: `./${project}`
    })

  } catch (error) {
    console.log(error);
  }

}

/**
 * 创建组件
 * @param {string} name 创建组件名称
 * @param {*} dest 
 * 
 * 找到对应的ejs模板
 * 编译ejs模板得到result
 * 将result写入进vue模板中
 * 将创建好的文件放到对应的文件中
 */
const addComponentAction = async (name, dest) => {
  // 编译模板获得结果
  const result = await compileEjs("component.vue.ejs", {
    name,
    lowername: this.name.toLowerCase()
  })
  // 写入文件
  const targetPath = path.resolve(dest, `${name}.vue`)
  writeToFile(targetPath, result)
}

/**
 * page的创建
 * @param {String} pageName 页面名称
 * @param {String} dest 写入路径
 */
const addPageAction = async (pageName, dest) => {
  const data = {
    name: pageName, lowername: pageName.toLowerCase()
  }
  // 编译ejs模板
  const pageComponentResult = await compileEjs("component.vue.ejs", data)
  const pageRouterResult = await compileEjs("router.vue.ejs", data)

  // 路径拼接
  if (mkdirSync(dest)) {
    const componentTargetPath = path.resolve(dest, `${pageName}.vue`)
    const routerTargetPath = path.resolve(dest, 'router.js')

    // 写入
    writeToFile(componentTargetPath, pageComponentResult)
    writeToFile(routerTargetPath, pageRouterResult)
  }

}

module.exports = {
  createProjectAction,
  addComponentAction,
  addPageAction
}