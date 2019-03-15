<template>
  <div class="pper-layout-full-header-aside-group">
    <div class="pper-layout-full-header-aside-content">
      <div class="pper-theme-header">
        <div v-if="$slots.header" class="box" ref="header">
          <slot name="header"/>
        </div>
      </div>
      <div class="pper-theme-content">
        <div class="box-aside">aside</div>
        <div class="box-content">
          <transition name="fade-scale">
            <router-view/>
          </transition>
        </div>
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

}
</script>

<style scoped>
</style>
