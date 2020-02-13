/*
* 在此文件中声明并导出那些使用 localStorage 进行缓存的 数据的类
*/

// 定义 存储 key 值的前缀，有时开发的是多界面应用，此时 prefix 就可设置为 window.location 中的相关参数拼接起来的字符串，从而区分多个界面的相同 key 的数据缓存
const prefix = ''

class BasicLocalStorage {
  constructor (key) {
    this.key = prefix + '-' + key
  }

  // 设置缓存
  set (value) {
    window.localStorage.setItem(this.key, value)
  }

  // 获取缓存
  get () {
    return window.localStorage.getItem(this.key)
  }

  // 移出缓存
  remove () {
    window.localStorage.removeItem(this.key)
  }
}

// 对用户信息进行缓存 - 距离
class UserInfo extends BasicLocalStorage {
  constructor () {
    super('userInfo')
  }
}

const userInfo = new UserInfo()

// 将实例化的对象导出
export default {
  userInfo
}
