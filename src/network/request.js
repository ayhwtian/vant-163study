import axios from 'axios'

export function request(config) {
  // 1、创建axios实例
  const instance = axios.create({
    baseURL: 'http://rap2.taobao.org:38080/app/mock/261951',
    timeout: 5000 // 毫秒
  })

  // 2、axios的拦截器
  // 2.1、请求拦截
  instance.interceptors.request.use(config => {
    // 在请求之前做什么
    // 拦截后必须返回，要不第三部网络请求就没有config
    return config
  }, err => {
    // 对请求错误做什么
    console.log(err)
  })

  // 2.2、响应拦截
  instance.interceptors.response.use(res => {
    // 拦截后必须返回，要不第三步真正网络请求就没有res.data了
    // 对响应数据做点什么
    return res.data
  }, err => {
    // 对响应错误做点什么
    console.log(err);
  })
  // 3.发送网络请求
  return instance(config)
}