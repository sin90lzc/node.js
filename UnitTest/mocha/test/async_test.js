/**
 *
 * 异步回调单元测试
 *
 * 在调用异步回调函数时，调用done方法即可
 *
 */
fs = require('fs');
describe('File', function(){
	describe('#readFile()', function(){
		it('should read simple_test.js without error', function(done){
			fs.readFile('simple_test.js', function(err){
				done(err);
			});
		})
	})
})
