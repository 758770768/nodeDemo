var events = require("events");
var er=  new events.EventEmitter();
   var connectionHandler=function(){
	   console.log("谢谢了");
   };
   er.on('connection',connectionHandler);
   er.emit('connection');