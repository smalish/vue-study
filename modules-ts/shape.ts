/*
 * @Description: 
 * @Author: yangying01
 * @Date: 2020-06-19 11:56:05
 * @LastEditTime: 2020-06-19 13:58:20
 * @LastEditors: yangying01
 */ 

//  一个模块只能有一个default输出
export default interface User{
    name: string
    age: number
}

 // 泛型 extends 约束
interface Shape{
    draw(): void
}

// export = Shape

// function drawShapes<S>(shapes: S[]): void{
//     shapes.forEach(shape => {shape.draw()})//报错：类型“S”上不存在属性“draw”。
// }

export function drawShapes<S extends Shape>(shapes: S[]): void {
    shapes.forEach(sharp => {sharp.draw()})
}

// export{ Shape as MyShape}//输出模块设置别名