/**
 *
 * 这里根据请求路径来路由处理函数
 */
var handler=require("./requestHandlers");
function route(pathname,response,postData){
	var startIndex=pathname.lastIndexOf("/")+1;
	var method=pathname.substr(startIndex);
	if(method==""){
		method="start";
	}
	if(typeof handler[method] === 'function'){
		return	handler[method](response,postData);
	}else{
		console.log("No request handler found for " + pathname);
	}
	console.log("About to route a request for "+pathname);
	return "404 Not Found";
}
exports.route=route;
