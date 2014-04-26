var events=require("events");
var util=require("util");
function MyQQ(){
	//events.EventEmitter.call(this);
}



function onlineHandle(QQNumber){
	console.log(QQNumber+" is on!");
}

function main(){
	util.inherits(MyQQ,events.EventEmitter);
	var myQQ=new MyQQ();
	myQQ.on("onLine",onlineHandle);
	myQQ.emit("onLine","20170748");
}


main();
