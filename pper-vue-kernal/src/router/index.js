import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由数据
import routesObj from './routes'
const router = {
  app: undefined,
  init: function (inRouters) {
    // let { inRouters, indexName } = opt
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
     * 路由拦截
     * 权限验证
     */
    router.beforeEach((to, from, next) => {
      next()
      // }
    })

    router.afterEach(to => { })
    return { router: router }
  },
  setIndex(indexName) {
    if (indexName) {
      routesObj.inRouters[0].redirect.name = indexName
    }
  },
  setApp(app) {
    this.app = app
  }
}

export default router
