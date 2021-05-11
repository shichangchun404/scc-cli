const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')
const download = require('download-git-repo')
const chalk = require('chalk')

async function create (projectName, options) {
  const cwd = process.cwd(); // 获取当前命令执行时的工作目录
  const dir = path.join(cwd,projectName); // 目标目录
  if (fs.existsSync(dir)) {
    console.log(chalk.red(projectName,'已存在'))
  } else if (options.force) {
    createDir(projectName, options.repo)
  } else {
    let answers = await getAnswer()
    createDir(projectName, answers.repo)
  }
}
function createDir (dir, repo) {
  let url = `direct:https://github.com/shichangchun404/${repo}.git`
  download(url, dir, {clone:true},
    function (err) {
      console.log(err ? err : chalk.green('download success'))
  });
}

function getAnswer() {
  return new Promise(async (resolve,reject) => {
    inquirer.prompt(
      {
        type: 'list',
        name: 'repo',
        message: '请选择下载框架',
        choices: ['koa2-mysql', 'vue-i18n', 'nuxtapp'],
        default: 0
      },
    ).then(answers => {
      resolve(answers)
    }).catch(err => {
      reject({})
    })
  })
}

module.exports = (...args) => {
  return create(...args)
}