const path = require('path');//引入path模块

function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'? './' :'/',
  // 构建时输出的目录
  outputDir: 'dist',
  assetsDir:  '',
  // 关闭eslint
  lintOnSave: false,
  // 生产环境不需要source map,可以置为false,加速打包速度及减小包大小
  productionSourceMap: false,
  pages: {
    about: {
      entry: 'src/views/about/main.js',
      template: 'public/index.html',
      filename: 'about.html',
      chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
    },
    index: {
      entry: 'src/views/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    }
  },
  chainWebpack:(config)=>{
    config.resolve.alias
    //set第一个参数：设置的别名，第二个参数：设置的路径　　
    .set('@',resolve('src'))
    //runtime
    // config.optimization.runtimeChunk('single')
    
  },
  devServer: {
    // 前端请求的链接
    host: '0.0.0.0',
    // 前端请求的端口
    port: 8888,
    // 代理
    proxy: {
      '/api':{
        target: 'http://www.liulongbin.top:3005/',
        changeOrigin: true,
        secure: true,
      }
    }
  },

}