import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由数据
import routesObj from './routes'
const router = {
  /**
   * 拦截器
   */
  interceptor: {
    before: undefined,
    after: undefined
  },
  app: undefined,
  init: function (inRouters) {
    Vue.use(VueRouter)
    if (inRouters) {
      routesObj.inRouters.push(...inRouters)
    }

    var routes = [...routesObj.inRouters, ...routesObj.errorPage]
    // 导出路由 在 main.js 里使用
    const router = new VueRouter({
      routes
    })

    /**
     * 路由前拦截
     */
    router.beforeEach((to, from, next) => {
      if (this.interceptor) {
        if (typeof (this.interceptor.before) === 'function') {
          this.interceptor.before(to, from, next)
        } else {
          next()
        }
      } else {
        next()
      }
    })
    /**
     * 路由后拦截
     */
    router.afterEach(to => {
      if (this.interceptor) {
        if (typeof (this.interceptor.after) === 'function') {
          this.interceptor.after(to)
        }
      }
    })
    return { router: router }
  },
  setIndex(indexName) {
    if (indexName) {
      routesObj.inRouters[0].redirect.name = indexName
    }
  },
  setApp(app) {
    this.app = app
  },
  setInterceptor(interceptors) {
    this.interceptor = interceptors.router
  }
}

export default router
