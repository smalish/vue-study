"use strict";
/*
 * @Description: 测试验证器
 * @Author: yangying01
 * @Date: 2020-06-19 14:09:17
 * @LastEditTime: 2020-06-19 16:16:32
 * @LastEditors: yangying01
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { LettersOnlyValidator } from './LettersOnlyValidator'
var LettersOnlyValidator = require("./LettersOnlyValidator");
var param = 'abc';
if (typeof param === 'string') {
    var letterValidation = new LettersOnlyValidator();
    console.log(letterValidation.isAcceptable(param));
}
var needloadNumValdation = false;
var num = '23';
if (needloadNumValdation) {
    var NumberValidation = require("./NumberOnlyValidation");
    // console.log(NumberValidation)
    var validator = new NumberValidation.NumberOnlyValidation();
    // let validator = new Num()
    console.log(validator.isAcceptable(num));
}
// import * as URL from "url";
// import * as path from "path";
// let myUrl = URL.parse("http://www.typescriptlang.org");
// console.log(myUrl)
// console.log(path.join('http://', 'www.baidu.com'))
var data = __importStar(require("./data.json")); //注意这块可以使用绝对路径,因为编译为js时
console.log(data);
