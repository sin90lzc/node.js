/**
 *
 *
 * Array对象使用示例
 */
assert=require("assert");

/**
 *
 * arrVar.slice(start[,end]);
 * 返回start-end（不包括end)索引之间的元素，以数组形式返回。如果start>end，返回空数组。
 *
 * 若start或end为负数，则索引值为length+start,length+end。
 *
 */
(function(){
	var arr=[0,1,2,3,4,5,6,7,8,9];
	assert.ok(arr.slice(0).length===arr.length);	
	assert.ok(arr.slice().length===arr.length);
	assert.ok(arr.slice(1,-1).length===arr.length-2);
	assert.ok(arr.slice(2,1).length===0);
})();



/**
 * 
 * arrVar.some(callback[,thisArg]);
 * 只要数组中任意一个元素调用callback返回true，那么some就返回true，否则返回False
 *
 * thisArg:指定在callback中this的引用对象，如果未指定，this为undefined
 *
 * callback的定义：
 * function(value,index,arr);
 * value:元素值
 * index：元素所在索引
 * arr：元素所在数组
 *
 */
(function(){
	var arr=[0,1,2,3,4];
	var tmp={x:1,y:2};
	assert.ok(arr.some(function(ele){return ele<5;}));
	assert.ok(arr.some(function(ele){return ele<4;}));
	assert.ok(!arr.some(function(ele){return ele<0;}));
	assert.ok(arr.some(function(ele){return this==tmp},tmp));
})();
