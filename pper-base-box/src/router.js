import layoutHeaderFooter from '../../pper-vue-kernal/src/layout/full-header-footer/base'
import layoutHeaderFooterAside from '../../pper-vue-kernal/src/layout/full-header-aside/base'
const meta = { requiresAuth: true }
export default {
  routes(layout) {
    return [
      {
        path: '/home',
        name: 'home',
        redirect: { name: 'home-index' },
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
        ])('home-')
      },
      {
        path: '/about',
        name: 'about',
        redirect: { name: 'about-index' },
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
        ])('about-')
      }
    ]
  }
}
