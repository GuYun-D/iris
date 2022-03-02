const { promisify } = require('util')
// downloadGitRepoFn 不支持使用promise，使用内置模块promisify转化，将他支持promise
const downloadGitRepoFn = promisify(require('download-git-repo'))
const { vueRepo } = require('../config/repo-config.js')

const createProjectAction = async (project) => {
  // clone
  await downloadGitRepoFn(vueRepo, project, { clone: true })
  // npm init

  // npm run serve
  // open
}

module.exports = {
  createProjectAction
}