import db from './util.db.js'

const dataBus = {
  push: function (key, value) {
    db.set(`sys.databus.${key}`, value).write()
  },
  get: function (key) {
    return db.get(`sys.databus.${key}`).value()
  },
  pop: function (key) {
    let res = db.get(`sys.databus.${key}`).value()
    db.unset(`sys.databus.${key}`)
      .write()
    return res
  }
}
export default dataBus
