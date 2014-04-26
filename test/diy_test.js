function MyQQ(){

}
function YourQQ(){

}

function inherits(obj1,obj2){
	obj1.prototype.on=obj2.prototype.on;
	obj1.prototype.emit=obj2.prototype.emit;
}

var eventObjs=require("./diy_event");

function main(){
	inherits(MyQQ,eventObjs.EmitEvent);
	inherits(YourQQ,eventObjs.EmitEvent);
	var myqq=new MyQQ();
	var yourqq=new YourQQ();
	myqq.on("login",function(qq){console.log("qq login:"+qq);});
	yourqq.on("login",function(qq){console.log("your qq login:"+qq);});
	myqq.emit("login","20170748");
	yourqq.emit("login","68876964");

}
main();
