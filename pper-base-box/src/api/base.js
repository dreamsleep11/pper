import request from '../../../pper-vue-kernal/src/plugin/axios/index'

export function getAnnouncementList(data) {
  return request({
    url: '/announcement/getAnnouncementList',
    method: 'post',
    data
  })
}
