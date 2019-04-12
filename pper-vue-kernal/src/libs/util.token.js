import db from './util.db.js'

const token = {
  setToken: function (token) {
    db.set(`sys.public.$token`, token).write()
  },
  getToken: function () {
    return db.get(`sys.public.$token`).value()
  }
}
export default token
