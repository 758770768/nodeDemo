var fs=require("fs");
var data="that is a good way to go for t";
 // rStream 是eventemmiter的实例获得输入流
var rStream=fs.createReadStream("input.txt", "utf8");
//获得输出流
var wStream = fs.createWriteStream("out.txt"); 

//给data事件注册监听器
rStream.on("data",function(chunk){
//	读取数据
	data+=chunk;
	
	console.log("data is reading....");
});


// 给end事件注册监听事件
rStream.on("end",function(){
	console.log(data);
	console.log("data is over reading!!!");

//	往文件中输出数据
	  wStream.write(data,"utf8");
//	  写入数据结束标志
	  wStream.end();
	//  绑定监听器
	 wStream.on("finish",function(){
		console.log("the data is writed!"); 
	 });
	
});




