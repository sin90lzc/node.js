function EmitEvent(){

}
EmitEvent.prototype.on=function(event,doSomeThing){
		this[event]=doSomeThing;	
	}
EmitEvent.prototype.emit=function(event,param){
		this[event](param);
	}
exports.EmitEvent=EmitEvent;
