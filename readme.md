# webp图片工具

## 支持jpg,jpeg,png,TIFF, gif转换为webp
[webp google官方技术参考网](https://developers.google.com/speed/webp/docs/cwebp)
`https://developers.google.com/speed/webp/docs/cwebp`

[google webp环境下载](https://storage.googleapis.com/downloads.webmproject.org/releases/webp/index.html)
`https://storage.googleapis.com/downloads.webmproject.org/releases/webp/index.html`


找到适合自己系统的版本，这里用Mac为例；
所以我们下载libwebp-1.0.3-mac-10.14.tar.gz
* libwebp-0.6.0-windows-x86.zip 适用于 Windows-x86.
* libwebp-0.6.0-windows-x64.zip 适用于 Windows-x64.
* libwebp-0.6.0-linux-x86-32.tar.gz 适用于 GNU/Linux-x86.
* libwebp-0.6.0-linux-x86-64.tar.gz 适用于 GNU/Linux-x86_64.

`
tar -xzvf libwebp-1.0.3-mac-10.14.tar.gz 
`

## webp 命令:
图片 转 webp : cwebp -q 90  psb.jpeg -o output.webp
webp 转 图片 : dwebp  output.webp -o test.png

git 转 webp : gif2webp -q 80 bottom1.gif -o bottom1.webp