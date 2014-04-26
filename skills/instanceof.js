/**
 *
 * 判断a instanceof A的结果，可通过下面的函数的执行结果来判断
 */
function isInstanceof(a,A){
	var Aproto=A.prototype;
	var a__proto__=a.__proto__;
	while(a__proto__!==Aproto){
		a__proto__=a__proto__.__proto__;
		if(a__proto__===null){
			return false;	
		}
	}
	return true;
}

//测试
var assert=require("assert");
assert.ok(isInstanceof(Object,Object));
assert.ok(isInstanceof(Function,Function));
assert.ok(isInstanceof(Array,Function));

var foo=function(){};
var bar=new foo();

assert.ok(isInstanceof(bar,foo));
exports.isInstanceof=isInstanceof;
