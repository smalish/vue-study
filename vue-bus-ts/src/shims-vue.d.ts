/*
 * @Description: 主要用于 TypeScript 识别 .vue 文件， Ts 默认并不支持导入 vue 文件，这个文件告诉 ts 导入 .vue 文件都按 VueConstructor<Vue> 处理。
 * @Author: yangying01
 * @Date: 2020-05-29 17:21:22
 * @LastEditTime: 2020-06-16 19:24:50
 * @LastEditors: yangying01
 */ 
import Vue from 'vue'

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

import { AxiosStatic } from "axios";
//这里只是ts规范，main.ts还是要引入axios赋值给vue.prototype.$axios
declare module "vue/types/vue" {
  interface Vue {
    // $axios: AxiosStatic;
    $qs: any;
  }
}

declare module 'vue-awesome-picker';


