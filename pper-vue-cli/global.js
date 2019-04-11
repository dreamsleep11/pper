#!/usr/bin/env node
let boxName = "";
let shellName = "";
module.exports = {
  // boxName: "",
  // shellName: ""
  setBoxName: value => {
    boxName = value
  },
  setShellName: value => {
    shellName = value
  },
  getBoxName: () => boxName,
  getShellName: () => shellName
}