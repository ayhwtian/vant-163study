import { request } from "./request"

// 获取轮播图信息
export function getBanner() {
  return request({
    url: '/index/banner'
  })
}

// 获取导航信息
export function getNavbar() {
  return request({
    url: '/index/navbar'
  })
}

// 获取课程信息
export function getCourses() {
  return request({
    url: '/index/courses'
  })
}
