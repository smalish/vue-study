/*
 * @Description: 接口
 * @Author: yangying01
 * @Date: 2020-06-03 18:09:34
 * @LastEditTime: 2020-06-05 11:27:36
 * @LastEditors: yangying01
 */ 

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
    // labelledObj.size // error
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);



// interface SquareConfig {
//     color?: string;
//     width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//     let newSquare = {color: "white", area: 100};
//     if (config.clor) {
//         // Error: Property 'clor' does not exist on type 'SquareConfig'
//         newSquare.color = config.clor;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }

// let mySquare = createSquare({color: "black"});

// 只读
// let list: readonly number[] = [1,2,3]

// 额外的属性检查
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }

// function createSquare(config: SquareConfig): void{
//     // ...
// }

// createSquare({ colour: "red", width: 100 }); //虽然是非必须属性，但是ts还是会做额外的校验，防止你笔误写错，如果确实没有下错，使用类型断言。
// createSquare({ colour: "red", width: 100 } as SquareConfig); //确实没有下错，使用类型断言。

//数据
interface SquareConfig {
        color?: string
        width?: number
        [propName: string]: any
    }
    
function createSquare(config: SquareConfig): void{
    // ...
}

createSquare({ colour: "red", width: 100 }); //虽然是非必须属性，但是ts还是会做额外的校验，防止你笔误写错，也可以加一个字符串索引签名
createSquare({ colour: "red", width: 100 } as SquareConfig); //确实没有下错，使用类型断言。



// 函数类型接口
interface SearchFunc{
    (source: string) : boolean
}

let mySearch:SearchFunc = function(source:string):boolean{
    //...
    return true
}


// 可索引数据类型
interface StringArray{
    [index:number]: string
}

let myStr:StringArray = ['hahaha', 'lalala']

interface NumberDictionary {
    [index: string]: number;
    length: number;    // 可以，length是number类型
    // name: string       // 错误，因为[index: string]: number;规定索引名是string,值是number类型，`name`的类型与索引类型返回值的类型不匹配
}

let str2 = {name: 123,length: 456}

interface ReadonlyStringArray {
    readonly [index: number]: string;
    //  [index: number]: readonly string; //error
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[2] = "Mallory"; // error!



// 类类型
// interface ClockInterface{
//     currentTime: Date
// }

// class Clock implements ClockInterface{
//     currentTime: Date = new Date()
//     // constructor(h: number, m:number){
//         // 属性“currentTime”需要初始化, 在定义或在构造函数中明确赋值。
//         // this.currentTime = new Date(h)
//     // }
// }

// 类是具有两个类型的：静态部分的类型和实例的类型。
// 当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。
// interface ClockConstructor {
//     new (hour: number, minute: number); //error
// }

// class Clock implements ClockConstructor {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }



// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//     tick ():void;
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("beep beep");
//     }
// }
// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("tick tock");
//     }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);



// 继承接口，一个接口可以继承多个接口
// interface Shape {
//     color: string;
// }

// interface Square extends Shape {
//     sideLength: number;
// }

// let square = <Square>{}; //开始没有赋值时，可以使用断言
// square.color = "blue";
// square.sideLength = 10


// 混合类型,例如： 一个对象可以同时做为函数和对象使用，并带有额外的属性。
interface Counter{
    (start:number): string //表示该类型是一个函数
    // name: string // name是接口自带属性，只读，为变量名，所以接口属性避开关键词和自带属性名
    user: string
    reset():void
}

function getCount(): Counter {
    let count = <Counter> function(num:number){}
    count.user = 'yy'
    count.reset = () => {}
    return count
}

let count1 = getCount()
count1(10)
// console.log(`name = ${count1.name}`) //count
console.log(`name = ${count1.user}`)
count1.reset()
console.log(`name = ${count1.user}`)



// 接口继承类类型
// 接口不仅可以继承接口（多个接口也可以），也可以继承类
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

// 只能够是Control的子类们才能实现SelectableControl接口
class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
// class Image1 implements SelectableControl {
//     select() { }
// }

// class Location {

// }




