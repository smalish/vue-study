let glob = require('glob')
let fs = require('fs')

// 替换html文件中js和css的引入路径
glob.sync('./my-mpa/js/*.js').forEach(function(filepath, name){
  let fileNameList = filepath.split('.')
  let filename = fileNameList[1].split('/')[3]
  let cssname = filepath.split('/')[3]
  let changeDirectory = `./my-mpa/${filename}/css`

  if(!filepath.includes('chunk-vendors')){
    // 获取到filename index about
    // 将之前css/about.f49368a1.css 转为 
  }
})