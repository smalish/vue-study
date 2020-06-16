"use strict";
/*
 * @Description: 泛型
 * @Author: yangying01
 * @Date: 2020-06-12 11:41:24
 * @LastEditTime: 2020-06-12 16:35:37
 * @LastEditors: yangying01
 */
function identity(arg) {
    //  console.log(arg.length) //类型“T”上不存在属性“length”。
    return arg;
}
var output1 = identity('string');
var output2 = identity('string');
var output3 = function (arg) { return arg; };
var output4 = function (arg) {
    return arg;
};
