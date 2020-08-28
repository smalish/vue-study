/*
 * @Author: Helijun
 * @Date: 2019-08-12 16:37:23
 * @LastEditors: yangying01
 * @LastEditTime: 2020-08-28 15:42:21
 * @Description: 
 * 变量limitStatus 小于此常量值的走具体实现，不弹toast，反之，弹toast
 */
import axios from 'axios'
import Vue from 'vue'

// let cancel, promiseArr = {}
// const CancelToken = axios.CancelToken
// 变量limitStatus 小于此常量值的走具体实现，不弹toast，反之，弹toast
const limitStatus = 100

let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let cancelToken = axios.CancelToken;
let removePending = (ever) => {
    for(let p in pending){
        if(pending[p].u === ever.url + '&' + ever.method) { //当当前请求在数组中存在时执行函数体
            pending[p].f(); //执行取消操作
            pending.splice(p, 1); //把这条记录从数组中移除
        }
    }
}

let nAxios = axios.create({
  // baseURL: process.env.BASE_API,
  // timeout: 5000,
  withCredentials: true,
  headers: {'X-Requested-With': 'XMLHttpRequest'}
})


// 请求拦截器
nAxios.interceptors.request.use(config => {
  // console.log(config)
  //添加公共参数platform_id,先取链接，再取缓存，默认2001
  let platform_id = ''
  if(location.href.match(/platform_id=([^&]*)/) && location.href.match(/platform_id=([^&]*)/)[1]){
    platform_id = location.href.match(/platform_id=([^&]*)/)[1]
  }else{
    let sessionParams = window.sessionStorage.getItem('shareParams')? JSON.parse(window.sessionStorage.getItem('shareParams')) : ''
    platform_id = sessionParams && sessionParams.platform_id? sessionParams.platform_id : '2001'
  }

  config.data += '&platform_id=' + platform_id

   
  if(/_vqrdpn_needload=1/i.test(config.data)) {
    Vue.prototype.$loading.show()
  }

  // 发起请求时，取消掉当前正在进行的相同请求
  // if (promiseArr[config.url]) {
  //   promiseArr[config.url]('操作取消')
  //   promiseArr[config.url] = cancel
  // } else {
  //   promiseArr[config.url] = cancel
  // }

  removePending(config); //在一个ajax发送前执行一下取消操作
  config.cancelToken = new cancelToken((c)=>{
      // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
      pending.push({ u: config.url + '&' + config.method, f: c });
  });
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器即异常处理
nAxios.interceptors.response.use(response => {
  // console.log(response);
  removePending(response.config);  //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
  if(!response.data) return Promise.reject(JSON.stringify(response));
  
  let status = response.data.status
  switch (status) {
    case 9996: // 需要授权，当前路径存入cookie

      if (process.env.NODE_ENV == 'production') {
        // console.log('BASE_API = ' + process.env.BASE_API)
        // Vue.prototype.GLOBAL.cookie('callback_url',  location.href.split('#')[1], Vue.prototype.GLOBAL.mainUrl)
        // location.reload()
       
        let mainUrl = window.location.protocol + '//' + window.location.host
        var pagepath = window.location.href.replace(mainUrl, response.data.data.domain)
        var callback_url = response.data.data.domain + '/wx/NwH5AuthCallback?platform_id=' + response.data.data.platform_id + '&callback=' + encodeURIComponent(pagepath)

        var weixin_url = response.data.data.authUrl.split('redirect_uri=')[0] + 'redirect_uri=' + encodeURIComponent(callback_url) + response.data.data.authUrl.split('redirect_uri=')[1]
        // console.log(weixin_url)
        location.href = weixin_url
      }

      break 
    case 9998: // 需要跳转登录
      
      break
    case 9999: // 需要弹窗登录
      // window.localStorage.setItem('isLogined', 0)
      // Vue.prototype.$login.show()
      break
    case 19999: // 需要用户完善信息弹窗，在每个页面单独处理，有回调
      // Vue.prototype.$login.hide();
      // Vue.prototype.$auth.show()
      break
    // 被新世界拦截的外部用户，需要跳转到最开始的来源域名，比如卡惠通
    case 29999:
      window.location.href = response.data.data.origin
      break
    // 屏蔽银行员工账号
    case 9995:
      window.location.href = response.data.data.url
      break
    default:
      if(status > limitStatus) {
        Vue.prototype.$toast({
          message: response.data.msg
        })
      }
  }
  Vue.prototype.$loading.hide()
  return response
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 302:
      case 400:
        Vue.prototype.$toast({
          message: '错误请求'
        })
        break
      case 401:
        Vue.prototype.$toast({
          message: '未授权，请重新登录'
        })
        break
      case 403:
        Vue.prototype.$toast({
          message: '拒绝访问'
        })
        break
      case 404:
        Vue.prototype.$toast({
          message: '请求错误,未找到该资源'
        })
        break
      case 405:
        Vue.prototype.$toast({
          message: '请求方法未允许'
        })
        break
      case 408:
        Vue.prototype.$toast({
          message: '请求超时'
        })
        break
      case 500:
      case 501:
      case 502:
      case 503:
      case 505:
        Vue.prototype.$toast({
          message: '服务器端出错'
        })
        break
      case 504:
        Vue.prototype.$toast({
          message: '网络超时'
        })
        break
      default:
        Vue.prototype.$toast({
          message: `连接错误${err.response.status}`
        })
        break
    }
  } else {
    
  }
  Vue.prototype.$loading.hide()
  return Promise.reject(err.response)
})

export default {
  post (url, data) {
    return new Promise((resolve, reject) => {
      nAxios.post(url, data).then(res => {
        resolve(res)
      }).catch((err) => {
        // reject(err)
        console.log(new Date(), err)
      }).finally(() => {
        Vue.prototype.$loading.hide();
      })
    })
  },

  get (url, params) {
    return new Promise((resolve, reject) => {
      nAxios.get(url, params).then(res => {
        resolve(res)
      }).catch((err) => {
        // reject(err);
        console.log(new Date(), err)
      }).finally(() => {
        Vue.prototype.$loading.hide();
      })
    })
  }
}
