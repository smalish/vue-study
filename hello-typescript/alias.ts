/*
 * @Description: 类型别名
 * @Author: yangying01
 * @Date: 2020-06-19 10:35:48
 * @LastEditTime: 2020-06-19 11:09:32
 * @LastEditors: yangying01
 */ 

 type listType<T> = T[]

 let numberList: listType<number> = [1,2,3]
 let stringList: listType<string> = ['aaa', 'bbb']

//  并集
interface E {
    name: string,
    price: number
}

type Union<T> = {id: number} & T

let union1:Union<E> = {id: 1, name: 'shirt', price: 99}

