var hello=require("./helloModule");
hello.hello();

var hello1 =require("./ObjectModule");
 var hello2=new hello1();
  hello2.setName("abc");
  hello2.print();