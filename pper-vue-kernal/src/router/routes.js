/**
 * 在主框架内显示
 */
var inRouters = [
  {
    path: '/',
    redirect: { name: 'index' }
  }
]

/**
 * 错误页面
 */
var errorPage = [
  // 404
  // {
  // path: '*',
  // name: '404',
  // component: () => import('../pages/error-page-404')
  // }
]

// // 导出需要显示菜单的
// export const frameInRoutes = frameIn

// 重新组织后导出
export default {
  inRouters,
  errorPage
}
