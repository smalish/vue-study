import loadTemp from './Loading.vue'

let Load = {} // 定义loading插件对象

Load.install = (Vue, options) => { // Vue的install方法，用于定义vue插件
  // 如果存在loading 不重复创建DOM
  if (document.getElementById('pageLoading')) return

  // 创建一个VUE构造器
  let lTemp = Vue.extend(loadTemp)
  // 实例化VUE实例
  let $vm = new lTemp()

  // 此处使用$mount来手动开启编译。用$el来访问元素，并插入到body中
  let tpl = $vm.$mount().$el
  document.body.appendChild(tpl)

  Vue.prototype.$loading = { // 在Vue的原型上添加实例方法，以全局调用
    show () {
      $vm.isShow = true
    },
    hide () {
      $vm.isShow = false
    }
  }
}
// 导出Load
export default Load
