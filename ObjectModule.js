function ModuleDemo() {

	var name = "";
	this.setName = function(Name) {
		name = Name;
	};
	this.getName = function() {
		return name;
	}
	this.print = function() {
		console.log("the value is:" + name);
	}

}
// 当require引用是直接返回此对象而不是exports对象
module.exports=ModuleDemo;