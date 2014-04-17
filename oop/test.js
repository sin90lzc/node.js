console.log(typeof(""));
console.log("".constructor);
String.prototype.t=function(){
	console.log("t function invoked");
	console.log(this.toString());
}
"hellokitty".t();
var h=new String("helloworld");
h.t();
console.log(typeof(h));
console.log(h.constructor);

