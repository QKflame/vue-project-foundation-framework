import request from '../../plugins/axios'

const login = {
  // 根据用户名和密码获取token
  getTokenByUserName (data) {
    return request({
      url: '/api/auth/getTokenByUserName',
      method: 'post',
      data
    })
  }
}

export default login
