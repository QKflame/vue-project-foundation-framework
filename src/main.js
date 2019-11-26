import Vue from 'vue'
import App from './App.vue'
import router from './router' // 路由管理
import store from './store' // 状态管理
import * as filters from './filters' // 全局过滤器
import api from './requests' // Ajax 请求全部挂载到 Vue 实例上
import './icons/index' // 使用 svg 图标
import './styles/index.scss' // 引入样式文件

Vue.prototype.$api = api // Ajax 请求全部挂载到 Vue 实例上

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
