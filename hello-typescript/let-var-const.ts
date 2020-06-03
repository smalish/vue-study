/*
 * @Description: 定义变量
 * @Author: yangying01
 * @Date: 2020-06-03 11:36:10
 * @LastEditTime: 2020-06-03 17:11:17
 * @LastEditors: yangying01
 */ 

// 函数作用域
if(true){
var a: number = 1
}
console.log(a)

// 块级作用域，ES6
if(true){
let b: number = 1
}
//  报错
// console.log(b)

// 常量使用，定义时赋值
if(true){
const c: number = 1
}
// 报错
// console.log(c)

//var 函数作用域，可重复定义，使用let可避免
// function sumMatrix(matrix: number[][]) {
//     var sum = 0;
//     for (var i = 0; i < matrix.length; i++) {
//         var currentRow = matrix[i];
//         for (var i = 0; i < currentRow.length; i++) {
//             sum += currentRow[i];
//         }
//     }

//     return sum;
// }

// console.log(sumMatrix([[11,12,13],[21,22,23]])) //36

// 结构赋值

let m1:number = 1
let n1:number = 2
let [first, ...rest] = [1,2,3,4]
console.log(`first = ${first} , rest = ${rest}`)

let { o1, o2 } = { o1: "baz", o2: 101 }
console.log(`o1 = ${o1} , o2 = ${o2}`)

// let { t1, t2 } = { t1: "baz", t2: 101 , t3:555} //error
let { t1, t2 , ...t} = { t1: "baz", t2: 101 , t3:555} //error


function f({ a, b = 0 } = { a: "" }): void {
    // ...
}
f({ a: "yes" }); // ok, default b = 0
f(); // ok, default to {a: ""}, which then defaults b = 0
// f({}); // error, 'a' is required if you supply an argument




