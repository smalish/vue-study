/*
 * @Description: toast插件
 * @Author: yangying01
 * @Date: 2020-05-31 19:29:08
 * @LastEditTime: 2020-06-17 16:13:11
 * @LastEditors: yangying01
 */ 
import Vue from 'vue'
import Toast from './Toast.vue'


// ----------------------------方法二： 直接引用Vue开发的自定义插件--------------------------
// 对于该方法，我们发现并没有使用install方法，但是他却能执行，你说奇怪不奇怪！
// 于是从代码上面进行分析：在第二和第三部分代码详解时已经有过交代，调用暴露的install函数时“Vue”是一个传入的形参，而此方法中注意是导入了Vue组件import Vue from 'vue'，与第一种方法中的形参Vue要区分。本人没有看过Vue的源码，所以一不知道个所以然，因此只能猜测在此方法中引入了Vue，vue中已经默认调用了insatll方法，然后在：

//调用Vue的extend方法生成一个构造器ToastConstructor继承Toast
// const ToastConstructor = Vue.extend(Toast)

// function showToast(param){

//     //构造器实例化
//     const toast = new ToastConstructor({
//         // 在构造器内部调用document生成一个div元素用来存放Toast.vue中写好的模板template
//         el: document.createElement('div'),
//         data(){
//             return{
//                 isShow: true,
//                 duration: param.duration || 1500,
//                 message: param.message || '暂无数据',
//                 complete: param.complete || function(){}
//             }
//         }
//     })

//     //调用document将构造器和生成的div元素添加到DOM中使其能够被渲染
//     document.body.appendChild(toast.$el)

//     // 回调函数
//     setTimeout(() => {
//         toast.isShow = false
//         toast.complete && toast.complete()
//     }, toast.duration)
// }

// //定义注册方法registryToast，通过把它们添加到 Vue.prototype 上实现全局注册
// function registryToast(){
//     Vue.prototype.$toast = showToast
// }
  
// //最后将注册方法作为导出项
// export default registryToast


// ----------------------------方法一： 明确暴露install函数--------------------------

//声明一个变量用来存放构造器
let $vm

export default{

    install(Vue, options){
        console.log(options)
        // 变量为空执行
        if(!$vm){
            //调用Vue的extend方法生成一个构造器myToastConstructor继承MyToast
            const ToastConstructor = Vue.extend(Toast);
            
            //构造器实例化
            $vm = new ToastConstructor({
                // 在构造器内部调用document生成一个div元素用来存放Toast.vue中写好的模板template
                el: document.createElement('div'),
                // 也可以在vue文件中付默认值
                data(){
                    return{
                        // isShow: false,
                        // duration: 1500,
                        // message: '',
                        // complete: function(){}
                    }
                },
                methods:{
                    // 也可以放到vue文件中
                    myHide(){
                        $vm.isShow = false
                        console.log('myhide --- ')
                    }
                }
            })
            
            //调用document将构造器和生成的div元素添加到DOM中使其能够被渲染
            document.body.appendChild($vm.$el);

            // 回调函数
            // setTimeout(() => {
            //     $vm.isShow = false
            //     $vm.complete && $vm.complete()
            // }, $vm.duration)
        }

        //声明toast并为其声明两个方法，显示和隐藏toast
        let toast = {
            //show方法传入两个参数分别为显示成功或者失败，显示的信息（与MyToast.vue中的数据对应）
            myshow(msg, backFun){
                $vm.isShow = true;
                $vm.message = msg || '暂无数据'
                console.log('myshow --- ' + $vm.duration)
                
                setTimeout(() => {
                    this.myhide()
                    backFun && backFun()
                }, $vm.duration)
                
            },
            //定义隐藏toast的方法
            myhide(){
                $vm.isShow= false;
                console.log('myhide --- ')
            }
        };

        // 自定义事件，组件构造器中需调用
        $vm.$on('myevent', () => {
            $vm.isShow= false;
            console.log('myevent --- ')
        })

        //判断Vue中是否有toast属性，没有就将上面定义好的toast赋值给Vue的属性
        if(!Vue.$toast){
            Vue.$toast = toast
        }

        //通过调用添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现全局注册
        Vue.prototype.$toast = Vue.$toast
    }

}

// 使用
// this.$toast('提示文案')
// this.hide()



