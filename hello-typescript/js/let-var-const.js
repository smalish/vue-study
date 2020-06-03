"use strict";
/*
 * @Description: 定义变量
 * @Author: yangying01
 * @Date: 2020-06-03 11:36:10
 * @LastEditTime: 2020-06-03 17:11:17
 * @LastEditors: yangying01
 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// 函数作用域
if (true) {
    var a = 1;
}
console.log(a);
// 块级作用域，ES6
if (true) {
    var b = 1;
}
//  报错
// console.log(b)
// 常量使用，定义时赋值
if (true) {
    var c = 1;
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
var m1 = 1;
var n1 = 2;
var _a = [1, 2, 3, 4], first = _a[0], rest = _a.slice(1);
console.log("first = " + first + " , rest = " + rest);
var _b = { o1: "baz", o2: 101 }, o1 = _b.o1, o2 = _b.o2;
console.log("o1 = " + o1 + " , o2 = " + o2);
// let { t1, t2 } = { t1: "baz", t2: 101 , t3:555} //error
var _c = { t1: "baz", t2: 101, t3: 555 }, t1 = _c.t1, t2 = _c.t2, t = __rest(_c, ["t1", "t2"]); //error
function f(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    // ...
}
f({ a: "yes" }); // ok, default b = 0
f(); // ok, default to {a: ""}, which then defaults b = 0
// f({}); // error, 'a' is required if you supply an argument
