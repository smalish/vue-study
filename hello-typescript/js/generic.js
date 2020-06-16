"use strict";
/*
 * @Description: 泛型
 * @Author: yangying01
 * @Date: 2020-06-12 11:41:24
 * @LastEditTime: 2020-06-12 19:21:13
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
//泛型定义数据
function getArray(arr) {
    console.log(arr.toString());
}
getArray([1, 2, 3]);
getArray(['aaa', 'bbb', 'ccc', 222]);
//类
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Object.defineProperty(Person2.prototype, "first", {
        get: function () {
            return this._first;
        },
        set: function (f) {
            this._first = f;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person2.prototype, "last", {
        get: function () {
            return this._last;
        },
        set: function (l) {
            this._last = l;
        },
        enumerable: false,
        configurable: true
    });
    return Person2;
}());
var p2 = new Person2();
p2.first = 'yang';
console.log(p2.first);
var c = {
    id: 1,
    run: function () {
        return '1';
    }
};
