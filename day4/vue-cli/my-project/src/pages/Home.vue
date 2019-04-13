<template>
  <div>
    <router-view></router-view>
    <Xfooter/>
  </div>
</template>

<script>
// 底部组件
import Xfooter from "../components/Xfooter.vue";

export default {
  name: "app",
  components: {
    Xfooter
  }
};
</script>

<style>
</style>
