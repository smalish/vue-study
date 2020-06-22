/*
 * @Description: 泛型
 * @Author: yangying01
 * @Date: 2020-06-12 11:41:24
 * @LastEditTime: 2020-06-19 11:39:30
 * @LastEditors: yangying01
 */ 

 function identity<T>(arg: T): T{
    //  console.log(arg.length) //类型“T”上不存在属性“length”。
     return arg
 }

 let output1 = identity('string')
 let output2 = identity<string>('string')
 let output3:{<T>(arg: T): T} = function<T>(arg: T): T{ return arg}

//  泛型定义函数
interface identity1{
    <T>(arg: T): T
}

let output4 = function(arg: string): string{
    return arg
}

//泛型定义数据
function getArray<T>(arr: T[]):void{
    console.log(arr.toString())
}

getArray<number>([1,2,3])
getArray(['aaa','bbb','ccc',222])


//类
class Person2<F, L>{
    private _first!: F
    private _last!: L

    set first(f: F){
        this._first = f
    }
    get first(): F{
        return this._first
    }

    set last(l: L){
        this._last = l
    }

    get last(): L{
        return this._last
    }
}

var p2 = new Person2()
p2.first = 'yang'
console.log(p2.first)

//接口
interface Command<T, R>{
    id: T
    run(): R
}

let c: Command<number, string> = {
    id: 1,
    run: () => {
        return '1'
    }
}


// 泛型 extends 约束
interface Shape{
    draw(): void
}

// function drawShapes<S>(shapes: S[]): void{
//     shapes.forEach(shape => {shape.draw()})//报错：类型“S”上不存在属性“draw”。
// }

function drawShapes<S extends Shape>(shapes: S[]): void {
    shapes.forEach(sharp => {sharp.draw()})
}

class Circle implements Shape{
    draw():void{
        console.log('circle draw')
    }
}

class Rectangle implements Shape{
    draw():void{
        console.log('rectangle draw')
    }
}

drawShapes([new Circle(), new Rectangle()])

