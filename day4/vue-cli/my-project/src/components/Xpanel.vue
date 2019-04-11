<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__bd">
      <a
        v-for="(n,index) in news"
        :key="index"
        href="javascript:void(0);"
        class="weui-media-box weui-media-box_appmsg"
      >
        <div class="weui-media-box__hd">
          <img @click="showGallery(n.author.avatar_url)" class="weui-media-box__thumb" :src="n.author.avatar_url" alt>
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title" v-text="n.author.loginname"></h4>
          <p class="weui-media-box__desc" v-text="n.title"></p>
        </div>
      </a>
    </div>
    <div @click="loadMore" class="weui-panel__ft">
      <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
        <div class="weui-cell__bd">查看更多</div>
        <span class="weui-cell__ft"></span>
      </a>
    </div>
  </div>
</template>
<script>
import bus from '../bus.js'
export default {
  data() {
    return {
      // 新闻
      news: [],
      // 页码
      page: 0
    };
  },
  // 创建前 虚拟DOM没有，但数据有
  async created() {
    // 首页加载的触发
    this.loadMore();
  },
  methods: {
    // 加载更多
    async loadMore() {
      // 加页码
      this.page += 1;
      let { data } = await this.$axios
        // api接口
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: this.page,
            limit: 10
          }
        });
      // 把接口拿到的数据，放入该组件的Model层
      this.news = [...this.news, ...data.data];
    },
    // 点击预览图片
    showGallery(src){
      console.log(src)
      // 通知Xgallery组件出现
      bus.$emit('showGallery',{
        src
      })
    }
  }
};
</script>
<style scoped>
.weui-panel {
  margin-bottom: 50px;
}
</style>


