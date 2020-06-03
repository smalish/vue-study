/*
 * @Description: 
 * @Author: yangying01
 * @Date: 2020-05-29 17:29:46
 * @LastEditTime: 2020-05-31 22:28:56
 * @LastEditors: yangying01
 */ 

const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir)
}


module.exports = {
    // 去掉eslint
    lintOnSave: false,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('plugins', resolve('src/plugins'))
            .set('style', resolve('src/style'))
       }
}