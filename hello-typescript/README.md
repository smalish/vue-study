<!--
 * @Description: ts基础知识
 * @Author: yangying01
 * @Date: 2020-06-03 11:48:58
 * @LastEditTime: 2020-06-04 15:20:56
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
非必传属性(?)
默认值（=）
任意数量的属性,字符串索引签名 [propName: string]: any

* 类



* 联合类型？？？

* Object???




