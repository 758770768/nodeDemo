// fs文件模块
var fs=require("fs");
// 读取文件
fs.readFile("input.txt", function(err,data){
	 if(err)return console.log(err.stack);
	 console.log(data.toString());
});
