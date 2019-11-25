import Vue from 'vue'
import Vuex from 'vuex'

// 导入每一个状态管理模块
import user from './modules/user'

// 导入 getters
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  getters
})
