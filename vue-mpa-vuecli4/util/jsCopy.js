var fs = require('fs')
const glob = require('glob')
/**
 * JS文件拷贝
 * @param src
 * @param dst
 */
var callbackFile = function (src, dst) {
  // console.log(src, ',', dst)
  fs.readFile(src, 'utf8', function (error, data) {
    if (error) {
      // eslint-disable-next-line no-console
      console.log(error)
      return false
    }
    fs.writeFile(dst, data.toString(), 'utf8', function (error) {
      if (error) {
        // eslint-disable-next-line no-console
        console.log(error)
        return false
      }

      // 删除原文件
      fs.unlink(src, function(){})

      // 如果所在的文件夹为空也删除
      let fileNameList = src.split('/')
      let dirname = src.substr(0, src.indexOf(fileNameList[fileNameList.length - 1]) - 1)
      console.log(dirname)
      console.log('----------------------')
      var files = fs.readdirSync(dirname)
      if(files.length == 0){
        fs.rmdirSync(dirname);
      }

      // if (dst.includes('.map')) {
      //   let srcName = src.split('/')[4]
      //   fs.unlink(`./dist/js/${srcName}.map`,function () { // 删除map
      //   })
      //   fs.unlink(`./dist/js/${srcName}`,function () { // 删除js
      //   })
      // } else { // JS写入成功
      //   callbackFile(dst, `${dst}.map`)
      // }
    })
  })
}
// 复制目录
glob.sync('./my-mpa/js/*.js').forEach((filepath, name) => {

  
  let fileNameList = filepath.split('.')
  let fileName = fileNameList[1].split('/')[3]// 多页面页面目录
  let copyName = filepath.split('/')[3]
  let changeDirectory = `./my-mpa/${fileName}/js`// 多页面JS文件地存放址
  if (!fileName.includes('chunk-vendors')) {
    console.log(filepath)
    // eslint-disable-next-line
    fs.exists(changeDirectory, function (exists) {
      if (exists) {
        // console.log(`${fileName}下JS文件已经存在`)
        callbackFile(filepath, `${changeDirectory}/${copyName}`)
      } else {
        fs.mkdir(changeDirectory, function () {
          callbackFile(filepath, `${changeDirectory}/${copyName}`)
          // console.log(`${fileName}下JS文件创建成功`)
        })
      }
    })
  }
})
