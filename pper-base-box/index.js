import router from './src/router'
import baseStore from './src/store/base'
/**
 * 业务盒子出口列表
 */
const utter = {
  test: { tag: 'test', description: '测试出口，依赖数据无' },
  test1: { tag: 'test1', description: '测试出口1，依赖数据无' }
}
/**
 * 业务盒子详细配置
 */
const pperBaseBox = {
  description: '基础实例盒子',
  nameSpace: 'pperbase',
  router(layout) {
    return router.routes(layout)
  },
  store: baseStore,
  utter: utter
}
export default pperBaseBox
