import router from '../router'
import NProgress from 'nprogress' // 顶部进度条
import 'nprogress/nprogress.css' // 顶部进度条样式

// 全局路由前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

// 全局路由后置钩子
router.afterEach((to, from) => {
  NProgress.done()
})
