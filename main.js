
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
let fileSuffixList = minArr[3]

console.log("minPathList=", minPathList)
console.log("minPathFileList=", minPathFileList)
console.log("fileNameList=", fileNameList)
console.log("fileSuffixList=", fileSuffixList)

for (let i = 0; i < minPathFileList.length; i++) {
    let cmdPath = ""
    if (process.platform == "darwin") { //mac
        if(fileSuffixList[i] == "gif"){
            cmdPath = "./lib/libwebp-1.0.3-mac-10.14/bin/gif2webp "+minPathFileList[i] +" -o "+minPathList[i]+"/"+fileNameList[i]+".webp"
        }else if(fileSuffixList[i] == "jpg" || fileSuffixList[i] == "png" || fileSuffixList[i] == "jpeg"){
            cmdPath = "./lib/libwebp-1.0.3-mac-10.14/bin/cwebp "+minPathFileList[i] +" -o "+minPathList[i]+"/"+fileNameList[i]+".webp"
        }else{
            console.warn("暂时不支持文件类型", fileSuffixList[i])
        }
        console.log("mac cmdPath==", cmdPath)
    }else if(process.platform == "linux"){
        if(fileSuffixList[i] == "gif"){
            cmdPath = "./lib/libwebp-1.0.3-linux-x86-64/bin/gif2webp "+minPathFileList[i] +" -o "+minPathList[i]+"/"+fileNameList[i]+".webp"
        }else if(fileSuffixList[i] == "jpg" || fileSuffixList[i] == "png" || fileSuffixList[i] == "jpeg"){
            cmdPath = "./lib/libwebp-1.0.3-linux-x86-64/bin/cwebp "+minPathFileList[i] +" -o "+minPathList[i]+"/"+fileNameList[i]+".webp"
        }else{
            console.warn("暂时不支持文件类型", fileSuffixList[i])
        }
        console.log("linux cmdPath==", cmdPath)
    }else {
        if(fileSuffixList[i] == "gif"){
            cmdPath = ".\\lib\\libwebp-1.0.3-windows-x64\\bin\\gif2webp "+minPathFileList[i] +" -o "+minPathList[i]+"/"+fileNameList[i]+".webp"
        }else if(fileSuffixList[i] == "jpg" || fileSuffixList[i] == "png" || fileSuffixList[i] == "jpeg"){
            cmdPath = ".\\lib\\libwebp-1.0.3-windows-x64\\bin\\cwebp "+minPathFileList[i] +" -o "+minPathList[i]+"/"+fileNameList[i]+".webp"
        }else{
            console.warn("暂时不支持文件类型", fileSuffixList[i])
        }
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
