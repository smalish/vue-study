"use strict";
/*
 * @Description: 扩展运算符
 * @Author: yangying01
 * @Date: 2020-06-15 19:09:13
 * @LastEditTime: 2020-06-15 20:11:41
 * @LastEditors: yangying01
 */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function add(x, y, z) {
    console.log(x + y + z);
    return x + y + z;
}
var args = [1, 2, 3];
add.apply(this, args);
add.call.apply(add, __spreadArrays([this], args));
function add1() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
add1(2, 3, 4);
// 解构
var _a = [1, 2, 3, 4, 5, 6], m = _a[0], n = _a.slice(1);
console.log("m=" + m + "; n=" + n);
// let {x, ...rest:any} = {name: 'yy', age: 18, x: 1}
// console.log(`x=${x}; rest=${rest}`)
