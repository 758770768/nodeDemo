var fs=require("fs");
fs.open("input.txt","r+",function(err,data){
	console.log(data.toString());
})

fs.writeFile("a.txt","this si  a good way",function(err){
	if(err)console.log(err.stack);
});