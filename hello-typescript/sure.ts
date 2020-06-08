/*
 * @Description: 类型断言
 * @Author: yangying01
 * @Date: 2020-06-08 15:38:24
 * @LastEditTime: 2020-06-08 15:57:41
 * @LastEditors: yangying01
 */ 

function toBoolean(some: string | number): boolean{
    // console.log(some.length)//报错，因为some可能为number,number没有length属性
    console.log((<string>some).length)//报错，因为some可能为number,number没有length属性

    return true
}

// 断言也不可能随便断言，number编译器也不知道怎么转换为boolean
// function toBoolean(some: string | number): boolean{
//     return <boolean>some //类型“number”不可与类型“boolean”进行比较。
// }

//报错，之前订阅对象的方法会报错，因为编译器发现类型“{}”上不存在属性“name”。
//运行不会报错，ts写法比较规范严谨，希望明确知道对象的属性，更好的明确对象的类型和结构
// let person = {}
// person.name = 'yy'
// person.age = 18

// 如果要这样写，可以使用类型断言
interface Person{
    name: string
    age: number
}

let person1 = {} as Person
person1.name = 'yy'
person1.age = 18

// 另一种写法
let person2 = <Person>{}
person2.name = 'yy'
person2.age = 18