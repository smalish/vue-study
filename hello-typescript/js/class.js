"use strict";
/*
 * @Description: ；类
 * @Author: yangying01
 * @Date: 2020-06-04 10:23:29
 * @LastEditTime: 2020-06-05 13:38:35
 * @LastEditors: yangying01
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
        this.age = 18;
    }
    return Person;
}());
var p11 = new Person();
var Movie = /** @class */ (function () {
    // 构造函数
    function Movie(name) {
        this.name = name;
    }
    //  函数
    Movie.prototype.display_name = function () {
        return this.name + '别名';
    };
    return Movie;
}());
var move1 = new Movie('move name');
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
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    return Animal;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new Animal("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
animal = rhino;
// animal = employee; // 错误: Animal 与 Employee 不兼容.
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this, "Rhino") || this;
    }
    Dog.prototype.move = function (distanceInMeters) {
        console.log("dog move " + distanceInMeters);
    };
    return Dog;
}(Animal));
var dog1 = new Dog();
animal = dog1;
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
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Object.defineProperty(Cat.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Cat;
}());
var cat1 = new Cat();
cat1.name = 'mimi';
console.log("cat1 name = " + cat1.name);
//静态属性,这些属性存在于类本身上面而不是类的实例上。通过类名访问 Man.type
var Man = /** @class */ (function () {
    function Man(name) {
        this.name = name;
        console.log(this.name + " is " + Man.type);
    }
    Man.type = 'male';
    return Man;
}());
var man1 = new Man('wangcan');
// 抽象类,抽象类做为其它派生类的基类使用,象类中的抽象方法不包含具体实现并且必须在派生类中实现。
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
var department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在
// 构造函数
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter;
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
var Ponit = /** @class */ (function () {
    function Ponit() {
    }
    return Ponit;
}());
var point3d = { x: 1, y: 2, z: 3 };
