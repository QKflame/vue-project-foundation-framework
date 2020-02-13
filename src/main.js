import Vue from 'vue'
import App from './App.vue'
import router from './router' // 路由管理
import store from './store' // 状态管理
import './permission/index' // 路由守卫
import * as filters from './filters' // 全局过滤器
import api from './requests' // Ajax 请求全部挂载到 Vue 实例上
import './icons/index' // 使用 svg 图标
import './styles/index.scss' // 引入样式文件

// 引入UI插件
import './plugins/ui'
// 引入自定义的指令
import './directives/index'
// 引入 sessionStorage
import sessionStorage from './utils/sessionStorage'
// 引入 localStorage
import localStorage from './utils/localStorage'

// Ajax 请求全部挂载到 Vue 实例上
Vue.prototype.$api = api
// 将 sessionStorage 挂载到实例上
Vue.prototype.$sessionStorage = sessionStorage
// 将 localStorage 挂载到实例上
Vue.prototype.$localStorage = localStorage

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
