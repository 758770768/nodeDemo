var fs= require("fs");
var zlib=require("zlib");
var rs=fs.createReadStream("output.txt.gz");
var ws=fs.createWriteStream("gz.txt");
rs.pipe(zlib.createGunzip()).pipe(ws);
console.log("the unzip is ok!!!! ");