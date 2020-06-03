/*
 * @Description: 
 * @Author: yangying01
 * @Date: 2020-05-29 18:41:35
 * @LastEditTime: 2020-05-31 19:11:18
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