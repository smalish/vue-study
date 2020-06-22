"use strict";
/*
 * @Description: 校验是否为字母
 * @Author: yangying01
 * @Date: 2020-06-19 14:02:55
 * @LastEditTime: 2020-06-19 14:27:41
 * @LastEditors: yangying01
 */
var lettersRegexp = /^[A-Za-z]+$/;
var LettersOnlyValidator = /** @class */ (function () {
    function LettersOnlyValidator() {
    }
    LettersOnlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LettersOnlyValidator;
}());
module.exports = LettersOnlyValidator;
