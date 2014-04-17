function A(){
//		with(arguments.callee.prototype){
//		hello=function(){
//			console.log("hello");
//		},
//		world=function(){
//			console.log("world");
//		}	
//		}
}

var a=new A();
var b=new A();
console.log(a.hello==b.hello);
console.log(a.world==b.world);
//a.hello();
//b.world();
var o={x:2,y:3};
with(o){
console.log(x);
}
	
console.log(o.x);
console.log(o.y);
