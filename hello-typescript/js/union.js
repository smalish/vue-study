"use strict";
/*
 * @Description: 联合类型
 * @Author: yangying01
 * @Date: 2020-06-12 16:48:58
 * @LastEditTime: 2020-06-12 16:59:13
 * @LastEditors: yangying01
 */
var value;
//类
var PrintA = /** @class */ (function () {
    function PrintA() {
        this.ptype = 'printA';
    }
    PrintA.prototype.printLandscape = function () {
        console.log('printLandscape');
    };
    return PrintA;
}());
var PrintB = /** @class */ (function () {
    function PrintB() {
        this.ptype = 'printB';
    }
    PrintB.prototype.printSketch = function () {
        console.log('printSketch');
    };
    return PrintB;
}());
function doPrint(p) {
    //判断实例
    if (p instanceof PrintA) {
        p.printLandscape();
    }
    else {
        p.printSketch();
    }
    if (p.ptype == 'printA') {
        p.printLandscape();
    }
    else {
        p.printSketch();
    }
}
doPrint(new PrintA());
