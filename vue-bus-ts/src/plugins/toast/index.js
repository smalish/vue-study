/*
 * @Description: toast插件
 * @Author: yangying01
 * @Date: 2020-05-31 19:29:08
 * @LastEditTime: 2020-06-01 13:47:28
 * @LastEditors: yangying01
 */ 
import Vue from 'vue'
import Toast from './Toast.vue'

//调用Vue的extend方法生成一个构造器ToastConstructor继承Toast
const ToastConstructor = Vue.extend(Toast)

function showToast(param){

    //构造器实例化
    const toast = new ToastConstructor({
        // 在构造器内部调用document生成一个div元素用来存放Toast.vue中写好的模板template
        el: document.createElement('div'),
        data(){
            return{
                isShow: true,
                duration: param.duration || 1500,
                message: param.message || '暂无数据',
                complete: param.complete || function(){}
            }
        }
    })

    //调用document将构造器和生成的div元素添加到DOM中使其能够被渲染
    document.body.appendChild(toast.$el)

    // 回调函数
    setTimeout(() => {
        toast.isShow = false
        toast.complete && toast.complete()
    }, toast.duration)
}

//定义注册方法registryToast，通过把它们添加到 Vue.prototype 上实现全局注册
function registryToast(){
    Vue.prototype.$toast = showToast
}
  
//最后将注册方法作为导出项
export default registryToast
