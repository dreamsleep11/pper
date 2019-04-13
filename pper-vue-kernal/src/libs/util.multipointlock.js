import db from './util.db.js'

const multipointlock = {
  setMultipointlock: function (multipointlock) {
    db.set(`sys.credentials.$multipointlock`, multipointlock).write()
  },
  getMultipointlock: function () {
    return db.get(`sys.credentials.$multipointlock`).value()
  },
  getClearMultipointlock: function () {
    return db.unset(`sys.credentials.$multipointlock`).write()
  }
}
export default multipointlock
