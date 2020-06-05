"use strict";
/*
 * @Description: 函数
 * @Author: yangying01
 * @Date: 2020-06-03 13:38:12
 * @LastEditTime: 2020-06-03 19:25:49
 * @LastEditors: yangying01
 */
//  固定参数
// function add(a:number, b:number): number {
//     return a + b
// }
// add(1,2)
// // add(1,2,3) //参数类型和个数一致
// const add2 = (a:number, b:number, c:number = 0):number => {
//     return a + b + c
// }
// 不确定参数（?）
// 默认参数（=）可以不用指定数据类型，ts可根据默认值推断出数据类型
// 不确定参数和默认参数一般放在函数参数的最后面
// function func1(a:number, b?:number): number{
//     if(b){
//         return a + b
//     }else{
//         return a
//     }
// }
// func1(1,2)
// let m = func1(1,2)
// let n = func1(1)
// console.log(`n = ${n}`)
// 不确定参数个数
// function fun2(a:number, ...rest:number[]){
//     return rest.reduce( (total:number, num:number):number => {
//         return total + num
//     }, a)
// }
// let sum = fun2(1,2,3,4,5,6)
// console.log(`sum = ${sum}`)
// function func1(a:number, b?:number = 10): number{ // error,参数不能又是可选又赋默认值
// function func1(a:number, b = 10): number{
//     return a + b
// }
// func1(1,2)
// let m = func1(1,2)
// let n = func1(1)
// console.log(`m = ${m} ; n = ${n}`)
// 返回值
//无返回值
// function fun1(a: number, b:number):void {
//     console.log(a + b)
// }
// fun1(1,2)
// let a = fun1(1,2)
// let b:number = fun1(1,2) //error
// 有返回值
// function fun2(a: number, b:number):number {
//    return a + b
// }
// fun2(1,2)
// let a = fun2(1,2)
// let b:number = fun2(1,2)
// 类型判断
function isString(value) {
    return typeof value === 'string';
}
function checkValue(value) {
    // if(typeof value === 'string'){
    //     console.log(`${value} is string`)
    // }
    if (isString(value)) {
        console.log(value + " is string");
    }
    if (typeof value === 'number') {
        console.log(value + " is number");
    }
}
checkValue(111);
checkValue('lalala');
