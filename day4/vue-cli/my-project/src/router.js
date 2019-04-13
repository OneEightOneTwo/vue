import Vue from 'vue'
import VueRouter from 'vue-router'
// 模块化必须显式使用Vue.use来加载路由功能
Vue.use(VueRouter)

// 详情页
import Detail from './pages/Detail.vue'
// 首页
import Home from './pages/Home.vue'
// 搜索页
import Search from './pages/Search.vue'

// 定义路由
const routes = [
    { path: '/home', component: Home, name: 'home' },
    { path: '/detail/:id', component: Detail, name: 'detail' },
    { path: '/search', component: Search, name: 'search' }
]
// 实例化路由
const router = new VueRouter({
    routes
})

// 暴露路由对象，为后续挂载容器做准备
export default router