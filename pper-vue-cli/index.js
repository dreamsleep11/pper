#!/usr/bin/env node
const tasks = require('./lib/tasks')
const shell = require('shelljs')
const path = require('path')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const gitShellPath = `https://github.com/dreamsleep11/pper-base-shell.git`
const gitBoxPath = `https://github.com/dreamsleep11/pper-base-box.git`
const shellDemo = 'pper-base-shell'
const boxDemo = 'pper-base-box'

let pwd = shell.pwd()
async function createPro(url, reg, proName) {
  if (proName && proName.length > 0) {
    let localpath = path.join(pwd.toString(), proName)
    await tasks.cloneCode(url, localpath)
    await tasks.modifyFile(localpath, reg, proName)
    console.info('创建完成,项目地址', localpath)
  } else {
    console.info('项目名称不可为空！程序退出。')
  }
}
async function main() {
  rl.question('请选择你想创建的项目：\n' +
    '[1]样例项目包括一个Box(业务盒子项目)和一个Shell(输出物项目)\n'
    + '[2]创建一个Shell(输出物项目)\n'
    + '[3]创建一个Box(业务盒子项目)\n'
    + '请选择：[1/2/3]  ', async function (inputValue) {
      switch (inputValue) {
        case '1':
          console.info('创建样例项目：')
          console.info('创建Shell项目：' + shellDemo)
          await createPro(gitShellPath, /pper-base-shell/g, shellDemo)
          console.info('创建Box项目：' + boxDemo)
          await createPro(gitBoxPath, /pper-base-box/g, boxDemo)
          rl.close()
          break;
        case '2':
          rl.question('请输入项目名称：', async function (inStr) {
            console.info('创建Shell项目：' + inStr)
            await createPro(gitShellPath, /pper-base-shell/g, inStr)
            rl.close()
          })
          break;
        case '3':
          rl.question('请输入项目名称：', async function (inStr) {
            console.info('创建Box项目：' + inStr)
            await createPro(gitBoxPath, /pper-base-box/g, inStr)
            rl.close()
          })
          break;
        default:
          console.info('程序退出')
          rl.close()
          break;
      }
    })
}
main()