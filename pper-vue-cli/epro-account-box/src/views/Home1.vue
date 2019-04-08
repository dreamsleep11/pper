<template>
  <div class="home">
    <div class="box">
      <div class="box-1">
        <el-button type="error" @click="handler_btn_click">跳转测试</el-button>
        <el-button type="error" @click="handler_btn_click">跳转测试</el-button>
        <el-button type="error" @click="handler_btn_click">跳转测试</el-button>
      </div>
      <el-button type="error" @click="handler_btn_click">跳转测试</el-button>
      <div>pper-base-box</div>
      <el-button type="error" @click="handler_btn_click">跳转测试</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  methods: {
    handler_btn_click() {
      this.$store.dispatch('pper-base-box/getBase')
    }
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: $color-primary;
  .box {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    .box-1 {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
  }
}
</style>
