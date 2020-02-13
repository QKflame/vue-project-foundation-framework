'use strict'

module.exports = {
  devServer: {
    host: '127.0.0.1',
    port: 8081
    // proxy: {
    //   '/api': {
    //     target: '',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/'
    //     }
    //   }
    // }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-project-foundation-framework/dist/' : '/',
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      'AMap': 'AMap' // 高德地图配置
    }
  }
}
