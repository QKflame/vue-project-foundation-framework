const user = {
  state: {
    userInfo: {},
    token: ''
  },

  mutations: {
    // 设置用户信息
    set_userInfo: (state, userInfo) => {
      state.userInfo = userInfo
    },
    // 设置 token 值
    set_token: (state, token) => {
      state.token = token
    }
  },

  actions: {
    // 设置用户信息
    setUserInfo ({ commit }, userInfo) {
      commit('set_userInfo', userInfo)
    },

    // 设置 token 值
    setToken ({ commit }, token) {
      commit('set_token', token)
    }
  }
}

export default user
