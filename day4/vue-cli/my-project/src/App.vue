<template>
  <div id="app">
    <Xheader/>
    <Xsearch/>
    <Xpanel/>
    <Xfooter/>
    <Xgallery/>
  </div>
</template>

<script>
// 头部组件
import Xheader from "./components/Xheader.vue";
// 搜索组件
import Xsearch from "./components/Xsearch.vue";
// 底部组件
import Xfooter from "./components/Xfooter.vue";
// 列表组件
import Xpanel from "./components/Xpanel.vue";
// 预览图
import Xgallery from "./components/Xgallery.vue";

export default {
  name: "app",
  components: {
    Xheader,
    Xsearch,
    Xfooter,
    Xpanel,
    Xgallery
  }
};
</script>

<style>
</style>
