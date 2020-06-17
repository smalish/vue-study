/*
 * @Description: 
 * @Author: yangying01
 * @Date: 2020-05-29 17:29:46
 * @LastEditTime: 2020-06-17 16:41:04
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
                target: 'http://10.2.23.161',
                ws: true,
                changeOrigin: true
            }
        }
        
    }
       

}