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
