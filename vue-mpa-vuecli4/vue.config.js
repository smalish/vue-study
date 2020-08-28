let pageMethods = require('./util/getPages.js')
let pages = pageMethods.pages()
console.log(pages)

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? './'
  : './',
  // 构建时输出的目录
  outputDir: process.env.NODE_ENV === 'production'
  ? 'my-mpa'
  : 'dist',
  // 关闭eslint
  lintOnSave: false,
  // 生产环境不需要source map,可以置为false,加速打包速度及减小包大小
  productionSourceMap: false,
  pages: pages

}