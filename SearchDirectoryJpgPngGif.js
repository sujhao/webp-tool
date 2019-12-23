//遍历文件夹压缩所有图片
'use strict'

const fs = require('fs');
const path = require("path");

let minPathList = [];
let minPathFileList = [];
let fileNameList = []


function searchDirectory(searchPath) {
    let files = fs.readdirSync(searchPath);
    for (let index = 0; index < files.length; index++) {
        const filename = files[index];
        let filedir = path.join(searchPath, filename);
        //获取当前文件的绝对路径  
        let stats = fs.statSync(filedir);
        if (stats.isDirectory()) {
            searchDirectory(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件  
        } else {
            let filenamearr = filename.split(".")
            let suffix = filenamearr[filenamearr.length - 1].toLowerCase()
            if (suffix == "jpg" || suffix == "jpeg" || suffix == "png" || suffix == "gif") {
                minPathList.push(searchPath);
                minPathFileList.push(filedir)
                fileNameList.push(filenamearr[0])
            }
        }
    }
}

function getAllDirectory(searthPath) {
    minPathList = [];
    minPathFileList = []
    fileNameList = []
    searchDirectory(searthPath);
    return [minPathList, minPathFileList, fileNameList];
}

exports.getAllDirectory = getAllDirectory;



