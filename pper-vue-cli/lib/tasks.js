#!/usr/bin/env node
const clone = require('git-clone-promise')
const shell = require('shelljs')
const vfs = require('vinyl-fs')
const path = require('path')
const through = require('through2')
function replaseContext(contents, reg, str) {
  return contents.replace(reg, str)
}
function modify(reg, str) {
  return through.obj(function (file, encoding, callback) {
    if (file.contents) {
      file.contents = new Buffer.from(replaseContext(file.contents.toString(), reg, str))
    }
    this.push(file)
    callback()
  })
}

const tasks = {
  cloneCode: async function (url, localpath) {
    await clone(url, localpath)
    await shell.rm('-rf', path.join(localpath, '.git'))
  },
  modifyFile: async function (localpath, reg, str) {
    vfs
      .src(localpath + '/**')
      .pipe(modify(reg, str))
      .pipe(vfs.dest(localpath))
  }
}
module.exports = tasks;