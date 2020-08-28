/*
 @使用方法: 
 *      step1，在根模块js文件main.js上引入即可：
 *            import toast from './components/toast/toast';
 *            Vue.use(toast)
 * 
 * 
 * @参数说明: {参数说明}
 *     （message参数为必传，其他参数选传）
 *      message： string; 提示文案
 *      icon:    string; fail，表示错误标识，succ，表示正确标识
 *      duration： number; 默认1500ms
 *      complete: function; 提示消失时回调函数
 * 
 * @demo展示: {demo展示}
 *      
 *      无icon的toast: vm.$toast({ message: '提示文案', duration：2000, complete: function(){ ... } })
 *      带icon的toast: vm.$toast({ message: '提示文案', icon: 'fail' })
 */


import Vue from 'vue';
import Toast from './Toast.vue'
let ToastConstructor = Vue.extend(Toast) // 返回一个“扩展实例构造器”

let myToast = (toastData) => {
  let toastDom = new ToastConstructor({
    el: document.createElement('div') // 将toast组件挂载到新创建的div上
  })

  if (toastData.message) {
    toastDom.message = toastData.message
    toastDom.isShow = true
    document.body.appendChild(toastDom.$el) // 把toast组件的dom添加到body里
  } else {
    return
  }
  if (toastData.icon) {
    toastDom.icon = toastData.icon
  }
  if (toastData.duration) {
    toastDom.duration = toastData.duration
  }
  if (toastData.complete) {
    toastDom.complete = toastData.complete
  }

  // 在指定 duration 之后让 toast消失
  setTimeout(() => {
    toastDom.isShow = false;

    toastDom.complete && toastDom.complete()
  }, toastDom.duration);
}

Toast.install = function (Vue) {
  Vue.prototype.$toast = myToast;
}

export default Toast;
