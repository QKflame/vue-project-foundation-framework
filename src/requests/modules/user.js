import request from '../../plugins/axios'

const user = {
  // 根据 token 值获取用户信息
  getUserInfoByToken (params) {
    return request({
      url: '/api/auth/user/info',
      method: 'get',
      params
    })
  }
}

export default user
