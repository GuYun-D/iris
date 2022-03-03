const ejs = require("ejs")
const path = require('path')
/**
 * 编译ejs模板
 * @param {String} template 模板名称
 * @param {Object} data 模板数据
 */
const compileEjs = (template, data) => {
  const templatePosition = `../templates/vue/${template}`;
  const templatePath = path.resolve(__dirname, templatePosition)
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, { data }, {}, function (err, result) {
      if (err) {
        console.error(err);
        reject(err)
        return;
      }

      resolve(result)
    })
  })
}

module.exports = {
  compileEjs
}