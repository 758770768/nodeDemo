const buf= new Buffer("this is a beautiful day","utf8");
//console.log(buf.toString("utf8"));
var json=buf.toJSON(buf);
console.log(json);