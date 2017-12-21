// 工具类模块
var util=require("util");
 function Person(){
	 this.name="emma";
	 this.age="18";
	 this.sex="male";
 }
// util 打印对象的字符串表示形式
 var Str=util.inspect(new Person());
 console.log(Str);