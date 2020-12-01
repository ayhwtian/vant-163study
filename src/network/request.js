import axios from 'axios'

export function request(config) {
  // 1、创建axios实例
  const instance = axios.create({
    baseURL: 'http://rap2api.taobao.org/app/mock/261951',
    timeout: 5000 // 毫秒
  })

  // 2、axios的拦截器
  // 2.1、请求拦截
  instance.interceptors.request.use(config => {
    // 拦截后必须返回，要不第三部网络请求就没有config
    // 在请求之前做什么
    return config
  }, err => {
    // 对请求错误做什么
    console.log(err)
  })

  // 2.2、响应拦截
  instance.interceptors.response.use(response => {
    // 拦截后必须返回，要不第三步真正网络请求就没有res.data了
    // 对响应数据做点什么
    return response.data
      /**
    * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
    * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
    */
    //  const res = response.data;
    //     if (res.code !== 20000) {
    //       Message({
    //         message: res.message,
    //         type: 'error',
    //         duration: 5 * 1000
    //       });
    //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //           confirmButtonText: '重新登录',
    //           cancelButtonText: '取消',
    //           type: 'warning'
    //         }).then(() => {
    //           store.dispatch('FedLogOut').then(() => {
    //             location.reload();// 为了重新实例化vue-router对象 避免bug
    //           });
    //         })
    //       }
    //       return Promise.reject('error');
    //     } else {
    //       return response.data;
    //     }

  }, error => {
    // 对响应错误做点什么
    // console.log(error);
    if (error.response) {
      switch (error.response.status) {
        case 400: error.message = '请求错误(400)'; break;
        case 401:
          // 这里写清除token的代码
          error.message = '未授权，请重新登录(401)';
          router.replace({
            path: 'login',
            query: { redirect: router.currentRoute.fullPath }//登录成功后跳入浏览的当前页面
          })

          break;
        case 403: error.message = '拒绝访问(403)'; break;
        case 404: error.message = `请求出错(404)`; break;
        case 408: error.message = '请求超时(408)'; break;
        case 500: error.message = '服务器错误(500)'; break;
        case 501: error.message = '服务未实现(501)'; break;
        case 502: error.message = '网络错误(502)'; break;
        case 503: error.message = '服务不可用(503)'; break;
        case 504: error.message = '网络超时(504)'; break;
        case 505: error.message = 'HTTP版本不受支持(505)'; break;
        default: error.message = `连接出错(${error.res.status})!`;

      }
    }
  }
  )
  // 3.发送网络请求
  return instance(config)
}