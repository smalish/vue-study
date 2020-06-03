"use strict";
/*
 * @Description:元祖
 * @Author: yangying01
 * @Date: 2020-06-03 13:27:58
 * @LastEditTime: 2020-06-03 16:16:04
 * @LastEditors: yangying01
 */
//  元祖
var tuple1;
tuple1 = ['1', 2]; //ok
// tuple1 = [2,'1']//error，顺序不对
// tuple1 = ['1',2,3] //error，数量不对
// tuple1[3] = 3 //error,越界报错
// 元祖跟数组差不多，里面可以有多个数据类型，但是顺序和类型不能变化
// 枚举
// enum Color{
//     red = 1,
//     green = 2,
//     blue = 1
// }
// console.log(Color[1]) //blue
//any
// let notSure:any = 4
// notSure.anyFunction() //ok
// let obj: Object = 4
// obj.anyFuction() //error, 类型“Object”上不存在属性“anyFuction”
//void 
// function warnUser(): void {
//     console.log("This is my warning message");
// }
// let unusable:void = undefined //ok, 但是赋值null报错,设置strictNullChecks: false;不严格校验null可以
//null undefined
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
//strictNullChecks: true; 默认为true,置为false时null和undefined可以赋值给其他类型
// let m2:number = null
// let m3:void = null
// never
// 返回never的函数必须存在无法达到的终点
// function error(message: string): never {
//     throw new Error(message);
// }
// let m4:number = error('s')
// // 返回never的函数必须存在无法达到的终点
// function infiniteLoop(): never {
//     while (true) {
//     }
// }
// object
// object表示非原始类型，也就是除number,string,boolean,symbol,null,undefined之外的数据类型
var p1 = {
    name: 'yangying',
    age: 18
};
var arr2 = [1, 2, 3];
// let pname: object = 'yy' // error string类型
// 类型断言
// 通过类型推断这种方式告诉编译器
// 尖括号\
var str = 'lallala';
var len1 = str.length; //(<string>str).length
var len2 = str.length;
// as ,jsx中只允许使用as
var len3 = str.length;
console.log("len1 = " + len1); //unefined
console.log("len2 = " + len2);
console.log("len3 = " + len3);
