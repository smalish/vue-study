/*
 * @Description: 校验是否为字母
 * @Author: yangying01
 * @Date: 2020-06-19 14:02:55
 * @LastEditTime: 2020-06-19 14:27:41
 * @LastEditors: yangying01
 */ 

import { StringValidator } from "./Validation";

const lettersRegexp = /^[A-Za-z]+$/;

class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}

export = LettersOnlyValidator