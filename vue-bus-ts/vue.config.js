/*
 * @Description: 
 * @Author: yangying01
 * @Date: 2020-05-29 17:29:46
 * @LastEditTime: 2020-06-16 11:48:36
 * @LastEditors: yangying01
 */ 

const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
    // 去掉eslint
    lintOnSave: false,

    configureWebpack: config => {
        // 确保静态资源
        config.resolve.extensions = ['.js', '.vue', '.json', '.ts']
    },
    chainWebpack: config => {
        config.resolve.alias
            //设置路径别名
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('plugins', resolve('src/plugins'))
            .set('@style', resolve('src/style'))
    },
    devServer:{
        proxy: {
            'hhrstore':{
                target: 'http://m.hhrcard.com/',
                ws: true,
                changeOrigin: true
            }
        }
        
    }
       

}