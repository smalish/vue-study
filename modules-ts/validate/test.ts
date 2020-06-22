/*
 * @Description: 测试验证器
 * @Author: yangying01
 * @Date: 2020-06-19 14:09:17
 * @LastEditTime: 2020-06-19 16:16:32
 * @LastEditors: yangying01
 */ 


import { StringValidator } from './Validation'
// import { LettersOnlyValidator } from './LettersOnlyValidator'
import LettersOnlyValidator = require('./LettersOnlyValidator')
import { NumberOnlyValidation as Num } from './NumberOnlyValidation'

var param: string | number = 'abc'
if(typeof param === 'string'){
    var letterValidation = new LettersOnlyValidator()
    console.log(letterValidation.isAcceptable(param))
}

//动态加载模块
declare function require(moduleName: string): any;

var needloadNumValdation = false
var num = '23'
if (needloadNumValdation) {
    let NumberValidation = require("./NumberOnlyValidation");
    // console.log(NumberValidation)
    let validator = new NumberValidation.NumberOnlyValidation();
    // let validator = new Num()
    console.log(validator.isAcceptable(num))
}

// import * as URL from "url";
// import * as path from "path";
// let myUrl = URL.parse("http://www.typescriptlang.org");
// console.log(myUrl)
// console.log(path.join('http://', 'www.baidu.com'))


import * as data from "./data.json"//注意这块可以使用绝对路径,因为编译为js时
console.log(data);

