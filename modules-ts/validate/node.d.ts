/*
 * @Description: 
 * @Author: yangying01
 * @Date: 2020-06-19 15:22:57
 * @LastEditTime: 2020-06-19 16:20:15
 * @LastEditors: yangying01
 */ 


// 外部模块声明，调用时根据申明提示
// declare module "url" {
//     export interface Url {
//         protocol?: string;
//         hostname?: string;
//         pathname?: string;
//     }

//     export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
// }

// declare module "path" {
//     export function normalize(p: string): string;
//     export function join(...paths: any[]): string;
//     export let sep: string;
// }

// 也可简单声明，相当于any类型，无方法提示
declare module "url"
declare module "path"

// 非javascript文件通配符

declare module "*.json"{
    const value: any;
    export default value;
}
