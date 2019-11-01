# webp图片使用

[toc]

## 支持jpg,jpeg,png,TIFF, gif转换为webp
[webp google官方技术参考网](https://developers.google.com/speed/webp/docs/cwebp)
`https://developers.google.com/speed/webp/docs/cwebp`

[google webp环境下载](https://storage.googleapis.com/downloads.webmproject.org/releases/webp/index.html)
`https://storage.googleapis.com/downloads.webmproject.org/releases/webp/index.html`


找到适合自己系统的版本，这里用Mac为例；
所以我们下载libwebp-1.0.3-mac-10.14.tar.gz

`
tar -xzvf libwebp-1.0.3-mac-10.14.tar.gz 
`

## webp 命令:
图片 转 webp : cwebp -q 90  psb.jpeg -o output.webp
webp 转 图片 : dwebp  output.webp -o test.png

git 转 webp : gif2webp -q 80 bottom1.gif -o bottom1.webp

## webp支持
暂时经过测试creator中android,ios都支持使用webp格式,
但是网页版有些浏览器兼容有问题，所以原生游戏推荐使用这款图片格式，短小精悍，
浏览器支持情况，google肯定支持（自己的图片格式还不支持搞毛）,safari,ie还没支持，
所以网页版要看看如何兼容使用webp格式图片再使用

![](./mm.gif)