const clone = require('git-clone-promise')
const program = require('commander')
const shell = require('shelljs')
const path = require('path')
const readline = require('readline')
const gulp = require('gulp')
const through = require('through2')
var boxName = ''
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function main() {
  rl.question('请输入项目名称[不可空]:', inputValue => {
    if (inputValue) {
      global.boxName = inputValue
      console.info(global)
      shell.exec('gulp cloneBox')
      rl.close()
    } else {
      console.info('无效项目名称！')
      rl.close()
    }
  })
}
main()
