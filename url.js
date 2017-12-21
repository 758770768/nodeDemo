var http=require('http');
var url=require('url');
var server=http.createServer(function(request,response){
var pathName=url.parse(request.url).pathname;
 console.log(pathName);
 response.write("hello wrold");
 response.end();
});
server.listen(8888);
