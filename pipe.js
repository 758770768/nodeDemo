var fs=require("fs");
var rs=fs.createReadStream("input.txt");
var ws=fs.createWriteStream("output.txt");
// 管道命令方法
rs.pipe(ws);
console.log("the data is  pipe finished");

 