const glob = require('glob')
let pages = {}
module.exports.pages = function () {
  glob.sync('./src/views/*/*.js').forEach(filepath => {
    let fileList = filepath.split('/')
    let fileName = fileList[fileList.length - 2]
    pages[fileName] = {
      entry: `src/views/${fileName}/main.js`,
      // 模板来源
      template: `public/index.html`,
      // 在 dist/index.html 的输出
      filename: process.env.NODE_ENV === 'development' ? `${fileName}.html` : `${fileName}/${fileName}.html`,
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', fileName]
    }
  })
  return pages
}

// {
//   about: {
//     entry: 'src/pages/about/main.js',
//     template: 'public/index.html',
//     filename: 'about/about.html',
//     chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
//   },
//   index: {
//     entry: 'src/pages/index/main.js',
//     template: 'public/index.html',
//     filename: 'index/index.html',
//     chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
//   }
// }
