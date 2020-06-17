/*
 * @Description: 
 * @Author: yangying01
 * @Date: 2020-05-29 18:41:35
 * @LastEditTime: 2020-06-17 15:05:54
 * @LastEditors: yangying01
 */ 

const install = function(Vue){
    const Bus = new Vue({
        methods : {
            emit (event , ...args){
                console.log('vue-bus emit -----')
                this.$emit(event , ...args);
            } ,
            on (event , callback){
                this.$on(event , callback) ;
            } ,
            off (event , callback){
                this.$off(event , callback);
            }
        }
    });
    //  通过原型对象去拓展对应的插件，可以使得所有的vue实例直接访问
    Vue.prototype.$bus = Bus ;
} ;
module.exports = install ;

// Vue的插件应当有一个公开的方法install(Vue, options){}

// MyPlugin.install = function(Vue, options){
//     // 1.添加全局方法或属性
//     Vue.myGlobalMethods = function(){
//         console.log('myGlobalMethods ---')
//     }

//     // 2.添加全局资源
//     Vue.directive('my-directive', {
//         bind(el, binding, vnode, oldVnode){
//             console.log('directive my-directive ---')
//         }
//     })

//     // 3.注入组件选项
//     Vue.mixin({
//         created() {
//             console.log('mixin created ---')
//         }
//     })

//     // 4.添加实例方法
//     Vue.prototype.$myMethod = function (methodsOptions) {
//         console.log('$myMethod ---')
//     }

// }