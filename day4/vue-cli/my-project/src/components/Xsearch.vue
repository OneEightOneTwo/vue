<template>
  <div class="weui-search-bar" :class="{
    'weui-search-bar_focusing':bool
  }" id="searchBar">
    <form class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <input
          v-model="searchInput"
          v-focus
          type="search"
          class="weui-search-bar__input"
          id="searchInput"
          placeholder="搜索"
          required
        >
        <a @click="clear" href="javascript:" class="weui-icon-clear" id="searchClear"></a>
      </div>
      <label
        @click="toggle"
        class="weui-search-bar__label"
        id="searchText"
        style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
      >
        <i class="weui-icon-search"></i>
        <span>搜索</span>
      </label>
    </form>
    <a @click="toggle" href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 控制搜索框的状态
      bool: false,
      // 搜索框的内容
      searchInput: ""
    };
  },
  methods: {
    toggle() {
      this.bool = !this.bool;
    },
    clear() {
      // 清空搜索框
      this.searchInput = "";
    }
  },
  directives: {
    focus(el) {
      el.focus();
    }
  }
};
</script>

