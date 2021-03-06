<!--
 * @Description: ts基础知识
 * @Author: yangying01
 * @Date: 2020-06-03 11:48:58
 * @LastEditTime: 2020-06-19 11:50:35
 * @LastEditors: yangying01
--> 

### ts基础知识

* var let const定义变量
var：函数级作用域
let: 块级作用域，var与let区别具体可查看ES6
const: 定义常量,定义时需赋值

定义变量最好使用let,定义常量使用const

* 数组 number[]或者Array<number>

* 元祖 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。如：[string, number],个数，类型，顺序必须一致

* 枚举 枚举类型是对javascript标准数据类型的补充。当多个值为同一个数值时取最后一个

* any 在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量

* void类型表示没有任何类型，一般用户函数没有返回值，声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined(测试null报错)

* undefined null，默认情况下undefined和null是所有类型的子类型，需要把strictNullChecks: true; 默认为true,置为false时null和undefined可以赋值给其他类型

* never 表示那些永不存在的值的类型。例如，never类型是那些总会抛出异常或根本就不会有返回值的函数返回值类型。never类型是任何类型的子类型，可以赋值给任何类型。然而，没有类型是never的子类型，即使any也不可以赋值给never

* 解构赋值 展开

* 函数
确定参数func(a:number, b:number): number{...}
有些参数非必传(?)，放在参数后面func(a:number, b?:number): number{...}
参数付默认值(=) func(a:number, b:number = 0): number{...}
不确定参数个数func(a:number, b:number，...rest:number[]): number{...}

* 接口
1. 表示数据
非必传属性(?)
默认值（=）
任意数量的属性,字符串索引签名 [propName: string]: any
```
interface Data{
    name: string
    age: number
    [propName: string]: any
}
```

2. 表示函数
```
interface Data{
    (name: string): void
}
```

3. 表示可索引的数据类型
```
['aaa', 'bbb']
interface Data{
    [index: number]: string
}
但是这种方式定义的索引数据类型是数组，但是不能.length及push、pop方法，需要使用这些方法需要手动在接口中添加这些属性

{name: 'yy', age: 18}
interface Data{
    [propName: string]: any
}
```


3. 表示类
```
interface Data{
    name: string
    age: number
    constructor(){}
    sayName(): void{
        console.log(this.name)
    }
}
```

3. 继承
接口可以继承接口，接口也可以继承类（接口不用实现），接口可以继承多个类
类可以实现接口(每个属性和方法都要实现)，类不能继承多个类，但是类可以实现多个接口

* 类

1.类实现接口,
2.可选属性(?)与扩展属性([propName:string]: any)
3.只读属性，readOnly name: string
4.实现函数 
```
interface fun{
    (param: string): void
}
```
5抽象类，不能实例化，普通类继承抽象类
抽象类中可以定义自己的抽象方法，没有方法体，普通类继承抽象类需要去实现它的抽象方法


* 类型断言， <stiing>x
是在编译的时候告诉编译器，我断言某个变量是这个类型，我写的我比你清楚
注意类型断言并不会转换类型，只是告诉编译器检查的时候当成某个类型检查

断言也不可能随便断言，number编译器也不知道怎么转换为boolean，案例见sure.ts



* 泛型


* 联合类型 a|b

* Object???

* 装饰器

```
1. 类装饰器
<!-- 不带参数 -->
@logClass(target: any){
    // 添加类属性，target.prototype.xxx
    // 添加类方法
}

<!-- 带参数，又名工厂装饰器 -->
@logClass(param: any){
    return function(target: any){
        // 添加类属性，target.prototype.xxx
        // 添加类方法
    }
}

<!-- 类装饰器重载类的属性和方法 -->
@logClass(target: any){
    return class extend target{
        // 所以target里的属性和方法重载
    }
}

2.类属性装饰器
@logProperty(param: any){
    return function(target: any, attrName:any){
        // 修改属性
        target[attrName]
    }
}

3.类方法装饰器
@logMethod(param: any){
    return function(target:any, methodName, desc){
        
    }
}

4.类方法参数装饰器
@logParam(param: any){
    return function(target:any, methodName, paramIndex){
        
    }
}

```
执行顺序： 属性 > 方法 > 方法参数 > 类； 同类装饰器：执行自下而上

查看ts编译后js代码执行打点。。。