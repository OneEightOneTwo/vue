<template>
  <header @click="showActionsheet">微信</header>
</template>
<script>
import state from "../observable.js";
export default {
  methods: {
    showActionsheet() {
      // 把控制弹窗的公有变量改为true
      state.isActionsheet = true;
    }
  },
  computed: {
    state() {
      return state;
    }
  }
};
</script>

<style scoped>
/* css是局部样式 */
header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: white;
  background-color: red;
}
</style>

