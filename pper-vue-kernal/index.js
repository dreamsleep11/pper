import Vue from 'vue'
import App from './src/App'
import routerFac from './src/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import EventBus from './src/libs/event.bus'
import store from './src/store/index'
// import outter from './src/module/outter'
import util from './src/libs/util'

const kernal = {
  util: util,
  registedBox: [],
  wormhole: {},
  initVue: undefined,
  makeWormhole(from, to) {
    if (this.wormhole) {
      this.wormhole[from.tag] = to
    }
  },
  /**
   * 装载方法
   * @param {配置} opt
   */
  load(opt) {
    util.log.success('==========初始化开始==========')
    let routers = []
    let stores = []
    /**
     * 便利盒子整理路由与数据控制器
     */
    if (opt.boxs) {
      opt.boxs.forEach(element => {
        if (element.box) {
          if (!this.checkNameSpace(element.box.nameSpace)) {
            util.log.success('==========扫描业务盒子[' + element.box.nameSpace + ':' + element.box.description + ']成功！==========')
            Object.keys(element.box.outter).forEach(key => {
              util.log.success(JSON.stringify(element.box.outter[key].tag + '[' + element.box.outter[key].description + ']'))
            })
            this.registedBox.push({ nameSpace: element.box.nameSpace, description: element.box.description })
            let routerArray = element.box.router(element.layout)
            if (routerArray) {
              routers.push(...routerArray)
            }
            if (element.box.store) {
              stores.push({ nameSpace: element.box.nameSpace, store: element.box.store })
            }
          } else {
            util.log.danger('==========扫描业务盒子[' + element.box.nameSpace + ':' + element.box.description + ']错误！盒子已注册==========')
          }
        }
      })
    }
    /**
     * 整合路由
     */
    routerFac.setInterceptor(opt.interceptors)// 注册路由拦截器
    let router = routerFac.init(routers).router
    routerFac.setIndex(opt.indexName)
    /**
     * 创建Vue实例
     */
    this.initVue = new Vue({
      router,
      store,
      render: h => h(App)
    })
    // routerFac.setApp(this.initVue)
    /**
     * 注册状态控制器
     */
    this.loadStores(stores)
    routerFac.setApp(this.initVue)
    this.initVue.$pper = {}
    this.initVue.$pper.interceptors = opt.interceptors
    /**
     * 装载element-ui
     */
    Vue.use(ElementUI)
    /**
     * 指定显示位置
     */
    this.initVue.$mount('#app')
    /**
     * 载入入口事件监听
     */
    if (kernal.wormhole) {
      Object.keys(kernal.wormhole).forEach(function (key) {
        EventBus.$on(key, () => {
          util.log.success('==========传送门==========')
          util.log.success(key + '====>' + kernal.wormhole[key].tag)
          kernal.initVue.$router.push('/' + kernal.wormhole[key].tag)
          util.log.success('==========传送门==========')
        })
      })
    }
    util.log.success('==========已成功加载盒子列表==========')
    this.registedBox.forEach(currentItem => {
      util.log.success(currentItem.nameSpace + ':' + currentItem.description)
    })

    util.log.success('==========初始化结束==========')
  },
  /**
   * 装载状态控制器方法
   * @param {*} stores
   */
  loadStores(stores) {
    if (stores) {
      stores.forEach(element => {
        this.initVue.$store.registerModule(element.nameSpace, element.store)
      })
    }
  },
  checkNameSpace(nameSpace) {
    for (var i = 0; i < this.registedBox.length; i++) {
      if (this.registedBox[i].nameSpace == nameSpace) {
        return true
      }
    }
    return false
  }
}
// 跳出模块
Vue.prototype.goOut = path => {
  EventBus.$emit(path)
}
Vue.prototype.jump = path => {
  kernal.initVue.$router.push(path)
}
// 出口清单
// Vue.prototype.$outter = outter
Vue.prototype.getToken = kernal.util.token.getToken
Vue.prototype.setToken = kernal.util.token.setToken
Vue.prototype.databus = kernal.util.databus

export default kernal
