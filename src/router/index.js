import Vue from 'vue'
import VueRouter from 'vue-router'

// 定义链接地址
const My = () => import('@/views/my/my');
const Home = () => import('@/views/home/home');
const MyStudy = () =>import("@/views/mystudy/mystudy");

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: '/my',
    component: My
  },
  {
    path: "/mystudy",
    component: MyStudy
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
