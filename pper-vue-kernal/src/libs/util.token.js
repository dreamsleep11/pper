import db from './util.db.js'

const token = {
  setToken: function (token) {
    db.set(`sys.credentials.$token`, token).write()
  },
  getToken: function () {
    return db.get(`sys.credentials.$token`).value()
  }
}
export default token
