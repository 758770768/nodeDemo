//加载事件模块
var events = require("events");
//获得事件发射对象
var er = new events.EventEmitter();
//事件触发回调
var ah=function(){
	 console.log("a");
}
//注册监听事件
 er.on("a",ah);

// 定时触发
 setTimeout(function(){
	 er.emit("a");
 },1000);