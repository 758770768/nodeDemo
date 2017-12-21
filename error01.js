var events = require("events");
var er= new events.EventEmitter();
er.on("a",function(){
	 console.log("a is a event");
});
//error为系统错误事件
er.on("error",function(){
	console.log("error is happening");
})
er.emit("error");