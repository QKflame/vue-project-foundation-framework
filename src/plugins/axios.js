import axios from 'axios'
import store from '../store'
import qs from 'qs'

// 处理请求失败的函数
const handleRequestError = (error) => {
  // 在这里可以弹窗或其它方式对失败的请求做出处理
  console.log(error)
}

const request = axios.create({
  baseURL: process.env.VUE_APP_URL,
  timeout: 5000
})

/** 请求拦截器 - 每次请求之前，如果存在 token 则在请求头中携带 token **/
request.interceptors.request.use(
  config => {
    (store.getters.token) && (config.headers['x-token'] = store.getters.token)
    let header = config.headers['Content-Type']
    if (!header) {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
      if (config.method === 'post') {
        config.data = qs.stringify(config.data, { indices: false })
      }
    }
    config.paramsSerializer = function (params) {
      return qs.stringify(params, { indices: false })
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/** 响应拦截器 **/
request.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      return Promise.reject(response)
    }
    return Promise.resolve(response.data)
  },
  error => {
    handleRequestError(error)
    return Promise.reject(error)
  }
)

export default request
