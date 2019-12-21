
const SearchDirectory = require("./SearchDirectoryJpgPngGif")
const path = require('path')
const fs = require('fs')
const child_process = require('child_process');

const compressPath = process.argv[2]
const outputPath = process.argv[3]
if (!compressPath) {
    console.warn("compressPath not exist=", compressPath)
    return
}
if (!outputPath) {
    console.warn("outputPath  not exist=", outputPath)
    return
}

console.info("compressPath =", compressPath)
console.info("outputPath =", outputPath)


let minArr =  SearchDirectory.getAllDirectory(compressPath);

let minPathList = minArr[0]
let minPathFileList = minArr[1]
let fileNameList = minArr[2]

console.log("minPathList=", minPathList)
console.log("minPathFileList=", minPathFileList)

for (let i = 0; i < minPathFileList.length-1; i++) {
    let tempOut = outputPath+"\\"+ minPathList[i]
    console.log("tempOut===", tempOut)
    if (!fs.existsSync(tempOut)) {
        fs.mkdirSync(tempOut);
    }
    let cmdPath = ""
    if (process.platform == "darwin") { //mac
    } else {
        cmdPath = ".\\lib\\libwebp-1.0.3-windows-x64\\bin\\cwebp.exe "+minPathFileList[i] +" -o "+tempOut+
    }
    child_process.exec(cmdPath, (error, stdout, stderr) => {  
        if (error) {
            console.log("转换失败", error);
            return
        }
        console.log("转换成功....", stdout);
    });
}
