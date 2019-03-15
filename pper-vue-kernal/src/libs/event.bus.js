import Vue from 'vue'
const EventTag = new Vue()
const EventBus = {
  /**
   * 发送事件
   */
  $emit: tage => {
    EventTag.$emit(tage)
  },
  /**
   * 注册事件
   */
  $on: (tage, callBack) => {
    EventTag.$on(tage, callBack)
  },
  /**
   * 销毁事件
   */
  $off: tage => {
    EventTag.$off()
  }
}
export default EventBus
