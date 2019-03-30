const clone = require('git-clone-promise')
const program = require('commander')
const shell = require('shelljs')
const path = require('path')
// let pwd = shell.pwd()
// let localpath = path.join(pwd.toString(), 'temp')
// clone(`https://github.com/dreamsleep11/pper-base-box.git`, localpath).then(
//   res => {
//     shell.rm('-rf', path.join(localpath, '.git'))
//     console.log('模板工程建立完成')
//   }
// )
