/*
 * @Description: 允许以 .tsx 结尾的文件，在 Vue 项目中编写 jsx 代码
 * @Author: yangying01
 * @Date: 2020-05-29 17:21:22
 * @LastEditTime: 2020-06-16 15:19:22
 * @LastEditors: yangying01
 */ 
import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}



