#!/usr/bin/env node
const shell = require('shelljs')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function main() {
  rl.question('请输入项目名称[不可空]:', inputValue => {
    if (inputValue) {
      shell.exec('gulp cloneBox --name ' + inputValue)
      rl.close()
    } else {
      console.info('无效项目名称！')
      rl.close()
    }
  })
}
main()
