#!/usr/bin/env node
const gulp = require('gulp')
const clone = require('git-clone-promise')
const program = require('commander')
const shell = require('shelljs')
const path = require('path')
const readline = require('readline')
const through = require('through2')
// const glob = require('./global')
const gitShellPath = `https://github.com/dreamsleep11/pper-base-shell.git`
const gitBoxPath = `https://github.com/dreamsleep11/pper-base-box.git`
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
function replaseBoxContext(str) {
  if (str.indexOf('pper-base-box') > -1) {
    return str.replace(/pper-base-box/g, glob.box.name)
  } else {
    return str
  }
}
function minifyBox() {
  return through.obj(function(file, encoding, callback) {
    if (file.contents) {
      file.contents = new Buffer(replaseBoxContext(file.contents.toString()))
    }
    this.push(file)
    callback()
  })
}

function replaseShellContext(str) {
  if (str.indexOf('pper-base-shell') > -1) {
    return str.replace(/pper-base-shell/g, glob.shell.name)
  } else {
    return str
  }
}
function minifyShell() {
  return through.obj(function(file, encoding, callback) {
    if (file.contents) {
      file.contents = new Buffer(replaseShellContext(file.contents.toString()))
    }
    this.push(file)
    callback()
  })
}
gulp.task('cloneBox', async function(option) {
  console.info(global)
  console.info(global.boxName)
  let pwd = shell.pwd()
  let localpath = path.join(pwd.toString(), global.boxName)
  await clone(gitBoxPath, localpath)
  await shell.rm('-rf', path.join(localpath, '.git'))
  rl.close()
  return gulp
    .src(localpath + '/**')
    .pipe(minifyBox())
    .pipe(gulp.dest(localpath))
})

gulp.task('cloneShell', async function(option) {
  let pwd = shell.pwd()
  let localpath = path.join(pwd.toString(), global.shellName)
  await clone(gitShellPath, localpath)
  await shell.rm('-rf', path.join(localpath, '.git'))
  return gulp
    .src(localpath + '/**')
    .pipe(minifyShell())
    .pipe(gulp.dest(localpath))
})
gulp.task('modifyFile', function() {
  gulp.src('files').pipe(gulp.dest(''))
})
