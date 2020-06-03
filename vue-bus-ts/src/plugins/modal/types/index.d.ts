/*
 * @Description: 
 * @Author: yangying01
 * @Date: 2020-06-01 11:38:43
 * @LastEditTime: 2020-06-02 20:22:47
 * @LastEditors: yangying01
 */ 

import Vue, {VueConstructor} from "vue"

interface Operate{
    // 1表示单个确定按钮；2表示两个并排按钮
    type: number,
    //取消按钮名称，默认‘取消’
    failName: string,
    // 确定按钮名称，默认‘确定’
    succName: string,
    //取消回调函数
    failFun: Function | null, 
    //成功回调函数
    succFun: Function | null,
    // 点击颜色
    selectedColor: string
}

interface Options{
    // 是否显示
    isShow?: boolean,
    // 图标
    icon?: string,//一共有三种，default，表示默认icon；input,表示有输入框icon;fail,表示消极icon
    //标题，默认'提示'
    title?: string,
    // 显示标题
    hideTitle?: boolean,
    // 提示文案
    message?: string,
    // 自定义样式名称
    customizeClassName?: string, 
    // 操作
    operate?: Operate
}

// interface ModalData{
//     (options: Options): VueConstructor
// }

// export function install (vue: typeof Vue): void;

// export const Modal: ModalData;

declare module 'vue/types/vue' {
  interface Vue {
    $modal (options: Options): VueConstructor
  }
}
