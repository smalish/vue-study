"use strict";
/*
 * @Description: 类型断言
 * @Author: yangying01
 * @Date: 2020-06-08 15:38:24
 * @LastEditTime: 2020-06-08 15:57:41
 * @LastEditors: yangying01
 */
function toBoolean(some) {
    // console.log(some.length)//报错，因为some可能为number,number没有length属性
    console.log(some.length); //报错，因为some可能为number,number没有length属性
    return true;
}
var person1 = {};
person1.name = 'yy';
person1.age = 18;
// 另一种写法
var person2 = {};
person2.name = 'yy';
person2.age = 18;
