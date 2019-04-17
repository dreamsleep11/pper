<template>
  <div class="pper-layout-full-header-footer-group">
    <div class="pper-layout-full-header-footer-content">
      <div class="pper-theme-header">
        <div v-if="$slots.header" class="box" ref="header">
          <slot name="header"/>
        </div>
      </div>
      <div class="pper-theme-content">
        <!-- <transition name="fade-scale"> -->
        <router-view/>
        <!-- </transition> -->
      </div>
      <div class="pper-theme-footer">
        <div v-if="$slots.footer" class="box" ref="footer">
          <slot name="footer"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pper-full-header-footer'
}
</script>
<style lang='scss' scoped>
</style>
