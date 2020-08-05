import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/Layout'

// 定义链接地址
const My = () => import('@/views/my/my');
const Home = () => import('@/views/home/home');
const MyStudy = () => import("@/views/mystudy/mystudy");
const Login = () => import('@/views/Login');

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: Layout,
    meta: {
      isVisible: true,
    },
    children: [
      {
        path: "home",
        name: Home,
        component: Home
      },
      {
        path: "mystudy",
        name: MyStudy,
        component: MyStudy
      },
      {
        path: "my",
        name: My,
        component: My
      }
    ]
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
