"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberOnlyValidation = void 0;
var numberRegExp = /^[0-9]+$/;
console.log('进入模块NumberOnlyValidation');
var NumberOnlyValidation = /** @class */ (function () {
    function NumberOnlyValidation() {
    }
    NumberOnlyValidation.prototype.isAcceptable = function (s) {
        console.log('执行NumberOnlyValidation isAcceptable方法');
        return numberRegExp.test(s);
    };
    return NumberOnlyValidation;
}());
exports.NumberOnlyValidation = NumberOnlyValidation;
