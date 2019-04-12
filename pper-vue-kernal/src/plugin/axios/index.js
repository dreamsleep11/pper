import axios from 'axios'
import { Message } from 'element-ui'
import util from '../../libs/util'
import kernal from '../../../index'

// 创建一个错误
// function errorCreat(msg) {
//   const err = new Error(msg)
//   errorLog(err)
//   throw err
// }

// 记录和显示错误
function errorLog(err) {
  // 添加到日志
  // store.dispatch('d2admin/log/add', {
  //   type: 'error',
  //   err,
  //   info: '数据请求异常'
  // })
  // 打印到控制台
  if (process.env.NODE_ENV === 'development') {
    util.log.danger('>>>>>> 网络请求错误 >>>>>>')
    console.log(err)
  }
  // 显示提示
  Message({
    message: err.message,
    type: 'error',
    duration: 5 * 1000
  })
}

// 创建一个 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 5000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在请求发送之前做一些处理
    if (!/^https:\/\/|http:\/\//.test(config.url)) {
      if (kernal.initVue.$pper.interceptors) {
        if (kernal.initVue.$pper.interceptors.ajax) {
          if (kernal.initVue.$pper.interceptors.ajax.request) {
            kernal.initVue.$pper.interceptors.ajax.request(config)
          }
        }
      }
    }
    console.info(config)
    return config
  },
  error => {
    // 发送失败
    console.log(error)
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    if (kernal.initVue.$pper.interceptors) {
      if (kernal.initVue.$pper.interceptors.ajax) {
        if (kernal.initVue.$pper.interceptors.ajax.response) {
          return kernal.initVue.$pper.interceptors.ajax.response(response)
        }
      }
    }

    return { message: '没有配置数据拦截器' }

  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误'
          break
        case 401:
          error.message = '未授权，请登录'
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器内部错误'
          break
        case 501:
          error.message = '服务未实现'
          break
        case 502:
          error.message = '网关错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网关超时'
          break
        case 505:
          error.message = 'HTTP版本不受支持'
          break
        default:
          error.message = '网络错误'
          break
      }
    }
    errorLog(error)
    return Promise.reject(error)
  }
)

export default service
