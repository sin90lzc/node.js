/**
 *
 * 手动设置单元测试的超时时间
 * this.timeout(0)取消超时时间
 *
 *
 */
describe('a suite of tests', function(){
	this.timeout(500);

	it('should take less than 500ms', function(done){
		setTimeout(done, 300);
	})

	it('should take less than 500ms as well', function(done){
		setTimeout(done, 200);
	})
})
