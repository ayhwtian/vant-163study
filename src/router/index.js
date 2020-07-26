import Vue from 'vue'
import VueRouter from 'vue-router'

// 定义链接地址
// const Home = () => import('../views/home/Home')

Vue.use(VueRouter)

  const routes = [
    /* {
      path: '',
      redirect: '/home' //重定向
    },
    {
      path: '/home',
      component: Home //引用链接地址
    }, */
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
