import layoutHeaderFooter from 'pper-vue-kernal/src/layout/full-header-footer/base'
import layoutHeaderFooterAside from 'pper-vue-kernal/src/layout/full-header-aside/base'
const meta = { requiresAuth: true }
export default {
  routes(layout) {
    return [
      {
        path: '/pper-base-box-home',
        name: 'pper-base-box-home',
        redirect: { name: 'pper-base-box-home-index' },
        component: layout
          ? layout.layoutHeaderFooter || layoutHeaderFooter
          : layoutHeaderFooter,
        children: (pre => [
          {
            path: 'index',
            name: `${pre}index`,
            component: () => import('./views/Home1.vue'),
            meta: { meta, title: '主页' }
          }
        ])('pper-base-box-home-')
      },
      {
        path: '/pper-base-box-about',
        name: 'pper-base-box-about',
        redirect: { name: 'pper-base-box-about-index' },
        component: layout
          ? layout.layoutHeaderFooterAside || layoutHeaderFooterAside
          : layoutHeaderFooterAside,
        children: (pre => [
          {
            path: 'index',
            name: `${pre}index`,
            component: () => import('./views/About1.vue'),
            meta: { meta, title: '关于我们' }
          }
        ])('pper-base-box-about-')
      }
    ]
  }
}
