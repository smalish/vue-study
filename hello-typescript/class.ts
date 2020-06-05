/*
 * @Description: ；类
 * @Author: yangying01
 * @Date: 2020-06-04 10:23:29
 * @LastEditTime: 2020-06-05 13:38:35
 * @LastEditors: yangying01
 */ 

 class Person{
    //  name: string// error 需要初始化
    name!: string //!
    age:number = 18
 }

 let p11:Person  = new Person()

 class Movie{
    // 属性
    name: string
    play_count!: number
    
    // 构造函数
    constructor(name: string){
        this.name = name
    }

    //  函数
    display_name() : string{
        return this.name + '别名'
    }
 }

 let move1 = new Movie('move name')

//  console.log(move1.display_name())


//  继承
// class Animal{
//     type!: string
//     name: string
//     age!: number

//     constructor(name: string){
//         this.name = name
//     }
// }

// class Dog extends Animal{
//     eat!: string[]

//     constructor(name: string,eat: string[]){
//         super(name)
//         this.eat = eat
//     }
    
//     bark() {
//         console.log('Woof! Woof!');
//     }
// }

// let dog1 = new Dog('xiaobai', ['鸡肉', '罐头'])
// console.log(dog1)

// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log('animal...')
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }

// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }

// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }

// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");

// new Animal('haha').move()
// sam.move();
// tom.move(34);

// // animal...
// // haha moved 0m.
// // Slithering...
// // animal...
// // Sammy the Python moved 5m.
// // Galloping...
// // animal...
// // Tommy the Palomino moved 34m.


// 公有属性&私有属性
// class Animal {
//     public name: string;
//     // private name: string; //error
// protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。
//     // protected name: string //error

//     public constructor(theName: string) { this.name = theName; }
//     public move(distanceInMeters: number) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }

// var animal1 = new Animal('LALA')
// animal1.move(1)
// animal1.name


// class ,兼容，继承自同一基类类型就可以兼容，可相互赋值
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
// animal = employee; // 错误: Animal 与 Employee 不兼容.

class Dog extends Animal{
    move(distanceInMeters: number):void{
        console.log(`dog move ${distanceInMeters}`)
    }
    constructor() { super("Rhino"); }
}

let dog1 = new Dog()
animal = dog1



// readyonly
// class Octopus {
//     readonly name: string;
//     readonly numberOfLegs: number = 8;
//     constructor (theName: string) {
//         this.name = theName;
//     }
// }

// 缩写
// class Octopus {
//     readonly numberOfLegs: number = 8;
//     constructor(readonly name: string) {
//     }
// }


// 存取器
// 首先，存取器要求你将编译器设置为输出ECMAScript 5或更高。 不支持降级到ECMAScript 3。 
// 其次，只带有 get不带有 set的存取器自动被推断为 readonly。 这在从代码生成 .d.ts文件时是有帮助的，因为利用这个属性的用户会看到不允许够改变它的值。
class Cat{
    private _name!: string

    get name(): string{
        return this._name
    }

    set name(newName: string){
        this._name = newName
    }
}

let cat1 = new Cat()
cat1.name = 'mimi'
console.log(`cat1 name = ${cat1.name}`)

//静态属性,这些属性存在于类本身上面而不是类的实例上。通过类名访问 Man.type
class Man{
    static type: string = 'male'
    name!: string
    constructor(name: string){
        this.name = name
        console.log(`${this.name} is ${Man.type}`)
    }
}

let man1 = new Man('wangcan')


// 抽象类,抽象类做为其它派生类的基类使用,象类中的抽象方法不包含具体实现并且必须在派生类中实现。
abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在



// 构造函数
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter: Greeter;
greeter = new Greeter("world");
console.log(greeter.greet());

// 编译后
// var Greeter = /** @class */ (function () {
//     function Greeter(message) {
//         this.greeting = message;
//     }
//     Greeter.prototype.greet = function () {
//         return "Hello, " + this.greeting;
//     };
//     return Greeter;
// }());
// var greeter;
// greeter = new Greeter("world");
// console.log(greeter.greet());



// 把类当做接口使用
class Ponit{
    x!: number
    y!:number
}

interface Ponit3d extends Ponit{
    z:number
}

let point3d: Ponit3d = {x: 1, y: 2, z: 3}