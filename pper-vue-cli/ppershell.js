const clone = require('git-clone-promise')
const program = require('commander')
const shell = require('shelljs')
const path = require('path')
const readline = require('readline')
const through = require('through2')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
async function makePro(url, name) {
  try {
    let pwd = shell.pwd()
    let localpath = path.join(pwd.toString(), name)
    await clone(url, localpath)
    shell.rm('-rf', path.join(localpath, '.git'))
    console.log('拉取源项目拉取成功')
    console.log('从源项目创建新项目')
  } catch (e) {
    console.info(e)
  }
}

async function main() {
  rl.question('请输入项目名称[不可空]:', inputValue => {
    if (inputValue) {
      glob.shell.name = inputValue
      gulp.start(['cloneShell'], function(err, msg) {
        if (err) {
          console.info('err', err)
          rl.close()
        }
      })
      rl.close()
    } else {
      console.info('无效项目名称！')
      rl.close()
    }
  })
}
main()
