/*
 * @Description: 校验是否为数组
 * @Author: yangying01
 * @Date: 2020-06-19 14:04:30
 * @LastEditTime: 2020-06-19 14:42:15
 * @LastEditors: yangying01
 */ 
import {StringValidator} from './Validation'

let numberRegExp = /^[0-9]+$/
console.log('进入模块NumberOnlyValidation')
export class NumberOnlyValidation implements StringValidator{
    isAcceptable(s: string): boolean{
        console.log('执行NumberOnlyValidation isAcceptable方法')
        return numberRegExp.test(s)
    }
}