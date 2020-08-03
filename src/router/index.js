import Vue from 'vue'
import VueRouter from 'vue-router'

// 定义链接地址
const My = () => import('@/views/my/my');
const Home = () => import('@/views/home/home');
const MyStudy = () => import("@/views/mystudy/mystudy");
const Login = () => import('@/views/Login');

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Login,
    // redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
    meta: {
      login_require: true
    }
  },
  {
    path: '/my',
    component: My,
    meta: {
      login_require: true
    }
  },
  {
    path: "/mystudy",
    component: MyStudy,
    meta: {
      login_require: true
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
