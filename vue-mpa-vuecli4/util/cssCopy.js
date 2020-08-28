let glob = require('glob')
let fs = require('fs')

let copyFile = function(filePath, targetPath){
  // console.log(filePath, targetPath)
  // 读取文件
  fs.readFile(filePath, 'utf8', function(error, data){
    if(error){
      console.log(error)
      return false
    }

    // css中图片资源引入路径修改
    let imgReg = /..\/img/g
    let content = data.toString().replace(imgReg, '../../img')
    fs.writeFile(targetPath, content, 'utf8', function(error){
      if(error){
        console.log(error)
      }
      // 删除原文件
      fs.unlink(filePath, function(){})
      // 如果所在的文件夹为空也删除
      let fileNameList = filePath.split('/')
      let dirname = filePath.substr(0, filePath.indexOf(fileNameList[fileNameList.length - 1]) - 1)
      // console.log(dirname)
      // console.log('----------------------')
      var files = fs.readdirSync(dirname)
      if(files.length == 0){
        fs.rmdirSync(dirname);
      }
      
    })
  })
}

// 同步读取文件
glob.sync('./my-mpa/css/*.css').forEach((filepath) => {
  let fileNameList = filepath.split('.')
  let filename = fileNameList[1].split('/')[3]
  let cssname = filepath.split('/')[3]
  let changeDirectory = `./my-mpa/${filename}/css`

  if(!filepath.includes('chunk-vendors')){
    fs.exists(changeDirectory, function(exists) {
      if(exists){
        //文件已存在
        copyFile(filepath, `${changeDirectory}/${cssname}`)
      }else{
        // 文件不存在,创建文件
        fs.mkdir(changeDirectory, function(){
          copyFile(filepath, `${changeDirectory}/${cssname}`)
        })
      }
    })
  }

})