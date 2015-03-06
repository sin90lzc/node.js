/**
 *
 * 通过__proto__的原型链原理，生成多层继承关系的类
 * 只适用于可访问__proto__的引擎
 *
 */
var ClassA=function(){};
ClassA.prototype={name:"tim"};
var ClassB=function(){};
ClassB.prototype={age:"18"};
var ClassC={constructor:function(school){this.school=school},isStudent:function(){return this.school;}};

//classes数组是一组父类的构造函数（或者对象里有一个constructor的属性方法作为构造函数）
//params是classes父类构造函数的入参
//返回一个构造函数，该构造函数迭代调用classes数组中的父类构造函数。并且从这个构造函数的开始的原型，通过原型链的方式，连接上所有父类构造函数的原型
var Clazz=function(classes,params){
	if(typeof classes !=='object' && typeof classes !== 'function'){
		throw new Error("入参错误");
	}
	if(!(params instanceof Array)){
		throw new Error("参数列表必须是数组");
	}
	var __class;
	if(classes instanceof Array){
		if(classes.length>1){
			if(params.length!=classes.length){
				throw new Error("构造函数入参数必须与构造函数数目一致");
			}
		}
		__class=function(){
			for(var i=0;i<classes.length;i++){
				var func;
				if(typeof classes[i] ==='function'){
					func=classes[i];
				}else if(typeof classes[i] ==='object'){
					func=classes[i].constructor;	
				}
				if(func){
					func.apply(this,params[i]);
				}
			}
		}
		var proto=__class.prototype;
		for(var i=0;i<classes.length;i++){
			var clz=classes[i];
			if(typeof clz==='object'){
				if(clz.constructor){
					clz.constructor.prototype=clz;
					clz=clz.constructor;
				}	
			}
			proto=join2last(proto,clz);
		}	
	}else{
		var func;
		var tmp_proto;
		if(typeof classes==='function'){
			tmp_proto=classes.prototype;
			func=classes;
		}else if(typeof classes==='object'){
			tmp_proto=classes;
			func=classes.constructor;
		}
		__class=function(){
			if(func){
				func.apply(this,params);
			}
		}
		__class.prototype=tmp_proto;
		
	}
	function join2last(proto,iclass){
		var p=proto;
		while(p.__proto__!==Object.prototype){
			p=p.__proto__;	
		}
		if(iclass.prototype) p.__proto__=iclass.prototype;
		return p;
	}
	return __class;
}
var New=function(classes){
	var _Constructor=Clazz(classes);
	return new _Constructor();
}
var con=Clazz([ClassA,ClassB,ClassC],[[],[],['hongxing']]);
var h=new con();

console.log(h instanceof ClassA);
console.log(h instanceof ClassB);
console.log(h instanceof ClassC.constructor);
console.log(h instanceof con);
console.log(h.isStudent());
console.log(h.school);
console.log(h.age);
console.log(h.name);
