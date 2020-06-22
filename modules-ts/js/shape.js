"use strict";
/*
 * @Description:
 * @Author: yangying01
 * @Date: 2020-06-19 11:56:05
 * @LastEditTime: 2020-06-19 13:58:20
 * @LastEditors: yangying01
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawShapes = void 0;
// export = Shape
// function drawShapes<S>(shapes: S[]): void{
//     shapes.forEach(shape => {shape.draw()})//报错：类型“S”上不存在属性“draw”。
// }
function drawShapes(shapes) {
    shapes.forEach(function (sharp) { sharp.draw(); });
}
exports.drawShapes = drawShapes;
// export{ Shape as MyShape}//输出模块设置别名
