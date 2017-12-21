var http = require("http");
 http.createServer(function(request,response){
	 response.end("hello world\n");
	 response.writeHead(200, {'Content-Type': 'text/plain'});
 }).listen(8889);
 
 
 