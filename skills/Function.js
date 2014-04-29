/**
 *
 * Function对象使用示例
 */
assert=require("assert");

/**
 *
 * func.bind(thisArg[,arg1,arg2,...]);
 * 返回一个与func函数体一样的函数，并且新函数调用过程中的this引用的是thisArg，arg1,arg2为新函数的默认入参，新函数后续调用时的入参会排在默认入参之后。
 *
 */
(function(){
	var func=function(){
		assert(arguments[0]===1);
		assert(arguments[1]===2);
		assert(arguments[2]===3);
		assert(arguments[3]===4);
		assert(this.name==="tim");
	}
	var obj={name:"tim"};
	var newFunc=func.bind(obj,1,2);
	newFunc(3,4);
})();
