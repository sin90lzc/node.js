/**
 *
 * describe可以嵌套调用，一般外层describe是类，里层是方法的单元测试
 *
 * describe(module,testContent):module是模块名或方法名。testContent是测试内容，可内嵌describe
 *
 * it(info,testCase):info一般用于描述该测试方法的功能,testCase用于调用要测试的方法
 *
 */
var assert=require("assert");

describe('Array', function(){
	describe('#indexOf()', function(){
		it('should return -1 when the value is not present', function(){
			assert.equal(-1, [1,2,3].indexOf(5));
			assert.equal(-1, [1,2,3].indexOf(0));
		})
	})

	describe('#length',function(){
		it('should return more than 0',function(){
			assert.ok([1,2,3].length>0);
		});
	});
});
