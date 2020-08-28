import axios from 'axios'
import qs from 'qs'
import vue from 'vue'

function apiAxios (method, url, params ){

  return new Promise((resolve,reject) => {
    vue.prototype.$loading.show()
    axios({
			method,
			url,
			data: method === 'POST' || method === 'PUT' ? qs.stringify(params) : null,
			params: method === 'GET' || method === 'DELETE' || method === 'PATCH' ? params : null,
			withCredentials: false
    }).then((response) => {  
      console.log(response)
      vue.prototype.$loading.hide()
      if (response.status === 200) {
        let status = response.data.error 
        switch(status){
          case 9996: // 需要授权
            
          break;
          
          case 9998: //未登录
           

            break;
          case 9994:
           
          case 0: 
            break;

          default:
  
        }  
        resolve(response.data)
      } else {
        
        reject('Axios返回状态不对，查看请求处理过程．．．．')
      }
    }, err => {
      vue.prototype.$loading.hide()
      reject(err)
      if(err.response.status){
        const errCode = err.response.status
        const msg = err.response.message 

        const errorMsgMap = {
          400: '错误请求',
          401: '请检查用户名和密码',
          403: '身份过期请重新登录',
          404: '请求错误,未找到该资源',
          408: '请求超时',
          500: '服务器端出错',
          501: '网络未实现',
          502: '网络错误',
          503: '服务不可用',
          504: '网络超时',
          'other':'未知错误'
        }
        var showMsg = errorMsgMap[errCode] ? errorMsgMap[errCode] :errorMsgMap['other'] ;
        vue.prototype.$toast.show({content:showMsg})    
      }
    }).catch((error) => {
      console.log(error)
    })
			
	})


}


export default {
  get:(url, params) => {
    return apiAxios('GET', url, params)
  },
  post: (url, params) => {
		return apiAxios('POST', url, params)
	},
	put: (url, params) => {
		return apiAxios('PUT', url, params)
	},
	delete: (url, params) => {
		return apiAxios('DELETE', url, params)
	},
	patch: (url, params) => {
		return apiAxios('PATCH', url, params)
	}
}