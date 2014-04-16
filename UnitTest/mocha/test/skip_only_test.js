/**
 * 控制跳过单元测试,只运行单元测试
 * skip和only的用法
 * 当存在it.only,那么只有该单元测试会被执行,当存在多个only，则执行代码最后的only。
 *
 */
fs = require('fs');
describe('File', function(){
	describe('#readFile()', function(){
		it.skip('should read test.ls without error', function(done){
			fs.readFile('test.ls', function(err){
				if (err) throw err;
				done();
			});
		})
		it.only('this should not be invoked', function(done){
			console.log("this is first it.only invoke!");
			done();
		})
		it.only('this should be invoke',function(){
//console.log("this is second it.only invoke!");
		})
		it('this should not invoke',function(){
			console.log("invoke neither only nor skip!");
		})
	})
})
