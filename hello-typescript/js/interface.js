"use strict";
/*
 * @Description: 接口
 * @Author: yangying01
 * @Date: 2020-06-03 18:09:34
 * @LastEditTime: 2020-06-08 15:28:23
 * @LastEditors: yangying01
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printLabel(labelledObj) {
    console.log(labelledObj.label);
    // labelledObj.size // error
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    // ...
}
createSquare({ colour: "red", width: 100 }); //虽然是非必须属性，但是ts还是会做额外的校验，防止你笔误写错，也可以加一个字符串索引签名
createSquare({ colour: "red", width: 100 }); //确实没有下错，使用类型断言。
var mySearch = function (source) {
    //...
    return true;
};
var myStr = ['hahaha', 'lalala'];
var str2 = { name: 123, length: 456 };
var myArray = ["Alice", "Bob"];
function getCount() {
    var count = function (num) { };
    count.user = 'yy';
    count.reset = function () { };
    return count;
}
var count1 = getCount();
count1(10);
// console.log(`name = ${count1.name}`) //count
console.log("name = " + count1.user);
count1.reset();
console.log("name = " + count1.user);
// 接口继承类类型
// 接口不仅可以继承接口（多个接口也可以），也可以继承类
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
// 只能够是Control的子类们才能实现SelectableControl接口
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
var callback = function (params) {
    console.log('lalala');
};
var print1 = function (callback) {
    callback(true);
};
print1(callback);
