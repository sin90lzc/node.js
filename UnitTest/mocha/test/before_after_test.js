/**
 *
 * before和after在describe内只执行一次
 * beforeEach和afterEach在进行每个方法测试前后执行一次
 *
 *
 */
var assert=require("assert");
describe('Array',function(){
	var arr=[];
	before(function(){
		console.log("before be invoked");
		arr=[1,2,3];	
	});		
	after(function(){
		console.log("after be invoked");
	});
	beforeEach(function(){
		console.log("beforeEach be invoked");	
	});
	afterEach(function(){
		console.log("afterEach be invoked");
	});
	
	describe('.indexOf',function(){
		it('should return index of the element',function(){assert.equal(0,arr.indexOf(1))});	
	});
	describe('.length',function(){
		it('should return length of the array',function(){assert.equal(3,arr.length)});
	});
});
