/*
 * @Description: loading插件ts
 * @Author: yangying01
 * @Date: 2020-06-01 15:02:01
 * @LastEditTime: 2020-06-01 16:22:44
 * @LastEditors: yangying01
 */ 
import Vue, {VueConstructor} from 'vue'

interface Operate{
  show: Function,
  hide: Function
}

declare module 'vue/types/vue' {
  interface Vue {
    $loading: Operate
  }
}




