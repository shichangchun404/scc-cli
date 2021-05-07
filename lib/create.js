const path = require('path')
const fs = require('fs')
const download = require("download-git-repo")
const rimraf = require("rimraf")

async function create (projectName, options) {
  console.log('create >>> ', projectName, options)
  const cwd = process.cwd(); // 获取当前命令执行时的工作目录
  const targetDir = path.join(cwd,projectName); // 目标目录
  const git = options.git
  console.log(targetDir, git)
  if (fs.existsSync(targetDir)) {
    if (options.force) {// 如果强制创建 ，删除已有的
      // 删除逻辑 
      // removeDir(projectName)
      //createDir(projectName)
    } else {
      console.log(projectName,'已存在 如要强制删除 请添加参数 -f')
    }
  } else {
    createDir(projectName, git)
  }
}
function createDir (targetDir, git) {
  download(`direct: ${git}`,
    targetDir,
    { clone: true },
    function (err) {
      console.log(err ? "Error" : "Success", err);
    }
  );
  
}

module.exports = (...args) => {
  return create(...args)
}