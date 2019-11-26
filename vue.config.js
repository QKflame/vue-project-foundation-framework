'use strict'

// const path = require('path')

// function resolve (dir) {
//   return path.join(__dirname, dir)
// }

module.exports = {
  devServer: {
    host: '127.0.0.1', // 如果是真机测试，就使用这个IP
    port: 8980,
    proxy: {
      // 配置跨域
      '/api': {
        target: '',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  publicPath: './'
}
