/*
 * @Author: yangying
 * @Date: 2018-07-16 16:02:23
 * @LastEditors: yangying01
 * @LastEditTime: 2020-06-01 11:23:22
 * @Description: modal，模态框提示
 * @使用方法: 
 *      step1，在根模块js文件main.js上引入即可：
 *            import modal from './components/modal/modal';
 *            Vue.use(modal)
 * 
 * @参数说明: 
 *      （message为必传参数，其他参数不传按照默认参数显示）
 *          
 *      message: string,提示文案
 *      icon： string,提示icon；一共有三种，default，表示默认icon；input,表示有输入框icon;fail,表示消极icon
 *      operate：Object,操作对象
 *      operate:{
                type: 2, //默认1表示单个确定按钮；2表示两个并排按钮
                failName: '取消', //取消操作按钮文案
                succName: '确定', //确定操作按钮文案
                failFun: null, //取消回调函数
                succFun: null,//成功回调函数
                selectedColor: '',
            }
        customizeClassName: 自定义样式名称
 * 
 * @demo展示: 
 * 
 *      that.$modal({
                        message: '一到两行字描述',
                        operate: {
                            type:2,
                            succName: '自定义',
                            failFun: that.failFun,
                            succFun: that.succFun
                        }
                    })
 */
import Vue from "./node_modules/vue"
import Modal from './Modal.vue'

let ModalConstructor  = Vue.extend(Modal) // 返回一个“扩展实例构造器”

let myModal = (modalData) => {
    let modalDom = new ModalConstructor({
        el: document.createElement('div')
    })

    var modalView = document.querySelector('#modalView')
    if(modalView){
        document.body.removeChild(modalView)
    }

    modalDom.isShow = true
    modalDom.title = modalData.title
    modalDom.hideTitle = modalData.hideTitle
    modalDom.message = modalData.message
    modalDom.icon = modalData.icon
    // 操作对象赋值
    modalDom.operate = Object.assign(modalDom.operate, modalData.operate)

    // 增加自定义样式
    modalDom.customizeClassName = modalData.customizeClassName

	document.body.appendChild( modalDom.$el )   //把modal组件的dom添加到body里

}

Modal.install = (Vue) => {
    Vue.prototype.$modal = myModal
}

export default Modal
