
const SearchDirectory = require("./SearchDirectoryJpgPngGif")
const path = require('path')
const fs = require('fs')
const child_process = require('child_process');

const compressPath = process.argv[2]
if (!compressPath) {
    console.warn("compressPath not exist=", compressPath)
    return
}

console.info("compressPath =", compressPath)


let minArr =  SearchDirectory.getAllDirectory(compressPath);

let minPathList = minArr[0]
let minPathFileList = minArr[1]
let fileNameList = minArr[2]

console.log("minPathList=", minPathList)
console.log("minPathFileList=", minPathFileList)
console.log("fileNameList=", fileNameList)

for (let i = 0; i < minPathFileList.length; i++) {
    let cmdPath = ""
    if (process.platform == "darwin") { //mac
        cmdPath = "./lib/libwebp-1.0.3-mac-10.14/bin/cwebp "+minPathFileList[i] +" -o "+minPathList[i]+"/"+fileNameList[i]+".webp"
        console.log("mac cmdPath==", cmdPath)
    } else {
        cmdPath = ".\\lib\\libwebp-1.0.3-windows-x64\\bin\\cwebp.exe "+minPathFileList[i] +" -o "+minPathList[i]+"/"+fileNameList[i]+".webp"
        console.log("windows cmdPath==", cmdPath)
    }
    child_process.exec(cmdPath, (error, stdout, stderr) => {  
        if (error) {
            console.log("转换失败", error);
            return
        }
        console.log("转换成功....", cmdPath);
    });
}
