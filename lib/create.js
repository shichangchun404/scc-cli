const path = require('path')
const fs = require('fs')
const download = require("download-git-repo")


async function create (projectName, options) {
  console.log('create2 >>> ', projectName, options)
  const cwd = process.cwd(); // 获取当前命令执行时的工作目录
  const dir = path.join(cwd,projectName); // 目标目录
  const repo = options.repo
  if (fs.existsSync(dir)) {
    if (options.force) {// 如果强制创建 ，删除已有的
      // 删除逻辑 
      // removeDir(projectName)
      //createDir(projectName)
    } else {
      console.log(projectName,'已存在 如要强制删除 请添加参数 -f')
    }
  } else {
    createDir(projectName, repo)
  }
}
function createDir (dir, repo) {
  download(`direct:${repo}`, dir, {clone:true},
    function (err) {
      console.log(err ? err : 'download success')
  });
}

module.exports = (...args) => {
  return create(...args)
}