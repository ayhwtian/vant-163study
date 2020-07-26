import { request } from "./request"

export function getBanner() {
  return request({
    url: '/index/banner'
  })
}

export function getNavbar() {
  return request({
    url: '/index/navbar'
  })
}