/*
 * @Description: 
 * @Author: yangying01
 * @Date: 2020-06-19 11:53:52
 * @LastEditTime: 2020-06-19 13:58:11
 * @LastEditors: yangying01
 */ 

import {Shape as MyShape,drawShapes} from './shape'
// import * as s from './shape' //不包含export default
// import User, {Shape, drawShapes} from './shape'
// import * as s from './shape'
// import Shape = require('./shape')

// import './global'


class Circle implements MyShape{
    draw():void{
        console.log('circle draw')
    }
}

class Rectangle implements MyShape{
    draw():void{
        console.log('rectangle draw')
    }
}

drawShapes([new Circle(), new Rectangle()])
