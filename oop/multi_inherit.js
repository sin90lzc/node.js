/**
 *
 * 通过__proto__的原型链原理，生成多层继承关系的类
 * 只适用于可访问__proto__的引擎
 */
var ClassA=function(){};
ClassA.prototype={name:"tim"};
var ClassB=function(){};
ClassB.prototype={age:"18"};

var Clazz=function(classes){
	if(typeof classes !=='object' && typeof classes !== 'function'){
		throw new Error("入参错误");
	}
	function __class(){};
	function join2last(proto,iclass){
		var p=proto;
		while(p.__proto__!==Object.prototype){
			p=p.__proto__;	
		}
		if(iclass.prototype) p.__proto__=iclass.prototype;
		return p;
	}
	if(classes instanceof Array){
		if(classes.length>0){
			var proto=__class.prototype=classes[0].prototype;
			for(var i=1;i<classes.length;i++){
				proto=join2last(proto,classes[i]);
			}	
		}
	}else{
		__class.prototype=classes;
	}
	return __class;
}
var New=function(classes){
	var _Constructor=Clazz(classes);
	return new _Constructor();
}
var con=Clazz([ClassA,ClassB]);
var h=new con();

console.log(h instanceof ClassA);
console.log(h instanceof ClassB);
console.log(h instanceof con);
