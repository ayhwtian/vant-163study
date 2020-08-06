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
    path: "/login",
    component: Login,
    meta: {
      requireAuth: '',
    }
  },
  {
    path: "/",
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta: {
          requierAuth: true,
        },
      },
      {
        path: "mystudy",
        name: 'MyStudy',
        component: MyStudy,
        meta: {
          requierAuth: true,
        },
      },
      {
        path: "my",
        name: 'My',
        component: My,
        meta: {
          requierAuth: true,
        },
      }
    ]
  },
]

const router = new VueRouter({
  routes,
  // mode: 'history'
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  // next有两种放行方式
  // 1、next() 直接放行
  // 2、next('/login') 强制跳转到login页

  if (to.meta.requierAuth) {// 获取token
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) {
      return next('login')
    }
  } else
  return next()

})

export default router
