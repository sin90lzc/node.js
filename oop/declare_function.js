/**
 *
 * 定义式函数会被解析器优先执行，再执行其他代码
 */
function myfunc(){
	console.log("hello");
}
myfunc();
function myfunc(){
	console.log("yeah");
}
myfunc();
