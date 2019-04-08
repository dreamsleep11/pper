const gulp = require('gulp')
const clone = require('git-clone-promise')
const program = require('commander')
const shell = require('shelljs')
const path = require('path')
const readline = require('readline')
const gitBoxPath = `https://github.com/dreamsleep11/pper-base-box.git`
gulp.task('cloneCode', function(options) {
  console.info(options)
  // let pwd = shell.pwd()
  // let localpath = path.join(pwd.toString(), name)
  // await clone(url, localpath)
  // shell.rm('-rf', path.join(localpath, '.git'))
})
