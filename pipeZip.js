// 压缩
var  fs  = require("fs");
//获得压缩模块实例
var zlib=require("zlib");
//创建输入流
var rs=fs.createReadStream("input.txt");
//输出流
var ws=fs.createWriteStream("output.txt.gz");
//管道链式流
rs.pipe(zlib.createGzip()).pipe(ws);
// 控制台打印
console.log("the zlib is finished!");

