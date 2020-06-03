/*
 * @Description: 
 * @Author: yangying01
 * @Date: 2020-06-01 13:28:38
 * @LastEditTime: 2020-06-02 20:26:23
 * @LastEditors: yangying01
 */ 


import Vue, { VueConstructor } from 'vue';

interface LoadingOption {
  //toast文案
  message?: string;
  // toast图标，succ或者fail
  icon?: string;
  //持续时间(ms)
  duration?: number;
  //蒙层背景色(支持直接写色号,rgb,rgba,英文单词)
  background?: string;
  //toast背景色
  toastBackground?: string;
  //toast文字颜色
  textColor?: string;
  //toast文字排列(适用于当出现文字太长出现换行)
  textAlign?: 'center' | 'right' | 'left';
  //toast的最大宽度(默认为400px)
  max?: number;
  //支持html输入(预留允许输入html串)
  content?: string;
  // 回调
  complete?: Function
}

// interface MyToast {
//   (options: LoadingOption): VueConstructor
// }

// export function install (vue: typeof Vue): void;

// export const Toast: MyToast;

declare module 'vue/types/vue' {
  interface Vue {
    $toast (options: LoadingOption): VueConstructor
  }
}