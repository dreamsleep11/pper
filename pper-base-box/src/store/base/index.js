import { getAnnouncementList } from '../../api/base'
import util from '../../../../pper-vue-kernal/src/libs/util'
export default {
  namespaced: true,
  state: { announcementList: [] },
  mutations: {},
  actions: {
    async getBase() {
      let res = await getAnnouncementList({
        pagination: { pageNo: 1, pageSize: 10, total: 0 },
        periodLength: 0,
        annTypes: [1, 2],
        status: 0,
        type: 'purchase'
      })
      util.log.success(JSON.stringify(res))
    }
  },
  getters: {
    announcementList: state => {
      return state.announcementList
    }
  },
  setters: {}
}
