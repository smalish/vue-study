/*
 * @Description: 
 * @Author: yangying01
 * @Date: 2020-06-16 13:49:58
 * @LastEditTime: 2020-06-16 14:37:01
 * @LastEditors: yangying01
 */ 

// bingo  此时window.axios有提示啦
import { AxiosStatic } from "axios";

// // 截取Window接口
// interface Window{
//     [propName: string]: any
// }

declare global {
    var com: Window
    interface Window {
        axios: AxiosStatic
    }
}

// 定义一个全局变量 window 类型为Window
// declare var com: Window;

export {}





