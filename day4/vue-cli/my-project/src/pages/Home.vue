<template>
  <div>
    <Xheader/>
    <Xsearch :bool="bool"/>
    <Xpanel/>
    <Xfooter/>
    <Xgallery/>
    <Xactionsheet/>
    <Xtoast/>
  </div>
</template>

<script>
// 头部组件
import Xheader from "../components/Xheader.vue";
// 搜索组件
import Xsearch from "../components/Xsearch.vue";
// 底部组件
import Xfooter from "../components/Xfooter.vue";
// 列表组件
import Xpanel from "../components/Xpanel.vue";
// 预览图
import Xgallery from "../components/Xgallery.vue";
// 弹窗
import Xactionsheet from "../components/Xactionsheet.vue";
// 加载中
import Xtoast from "../components/Xtoast.vue";

export default {
  data() {
    return {
      bool: false
    };
  },
  name: "app",
  components: {
    Xheader,
    Xsearch,
    Xfooter,
    Xpanel,
    Xgallery,
    Xactionsheet,
    Xtoast
  }
};
</script>

<style>
</style>
