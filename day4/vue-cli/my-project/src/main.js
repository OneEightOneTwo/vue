import Vue from 'vue'
import App from './App.vue'
// ajax库
import axios from 'axios'
// weui样式
import 'weui'
import $ from 'jquery'

// Vue继承jquery的方法
Vue.prototype.$ = $
// Vue继承axios方法
Vue.prototype.$axios = axios

// 发布的时候，代码错误不提醒
Vue.config.productionTip = false
// eslint
new Vue({
  el: "#app",
  // 渲染App组件
  render: h => h(App),
})
// .$mount('#app')
