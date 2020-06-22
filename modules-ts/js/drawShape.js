"use strict";
/*
 * @Description:
 * @Author: yangying01
 * @Date: 2020-06-19 11:53:52
 * @LastEditTime: 2020-06-19 13:58:11
 * @LastEditors: yangying01
 */
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
// import * as s from './shape' //不包含export default
// import User, {Shape, drawShapes} from './shape'
// import * as s from './shape'
// import Shape = require('./shape')
// import './global'
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        console.log('circle draw');
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.draw = function () {
        console.log('rectangle draw');
    };
    return Rectangle;
}());
shape_1.drawShapes([new Circle(), new Rectangle()]);
