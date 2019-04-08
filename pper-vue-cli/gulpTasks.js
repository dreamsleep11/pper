#!/usr/bin/env node
const gulp = require('gulp')
const clone = require('git-clone-promise')
const program = require('commander')
const shell = require('shelljs')
const path = require('path')
const readline = require('readline')
const gitBoxPath = `https://github.com/dreamsleep11/pper-base-box.git`
const through = require('through2')
const glob = require('./glob')
function replaseContext(str) {
  if (str.indexOf('SvcApplication') > -1) {
  }
}
function minify() {
  return through.obj(function(file, encoding, callback) {
    console.info(file.path)
    // file.path = replaseContext(file.path.toString())
    // if (file.contents) {
    //   file.contents = new Buffer('add' + file.contents.toString())
    // }
    this.push(file)
    callback()
  })
}
gulp.task('cloneCode', async function(option) {
  let pwd = shell.pwd()
  let localpath = path.join(pwd.toString(), glob.box.name)
  await clone(gitBoxPath, localpath)
  // console.info('path.join(pwd.toString() + b', path.join(pwd.toString() + '/b'))
  await shell.rm('-rf', path.join(localpath, '.git'))
  return gulp
    .src(localpath + '/**')
    .pipe(minify())
    .pipe(gulp.dest(localpath))
})

gulp.task('modifyFile', function() {
  gulp.src('files').pipe(gulp.dest(''))
})
