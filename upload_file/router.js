var handler=require("./requestHandlers");
function route(pathname,response,request){
	console.log("About to route a request for " + pathname);
	var startIndex=pathname.lastIndexOf("/")+1;
	var method=pathname.substr(startIndex);
	if(method==""){
		method="start";
	}
	if(typeof handler[method] === 'function'){
		return	handler[method](response,request);
	}else{
		console.log("No request handler found for " + pathname);
	}
	console.log("About to route a request for "+pathname);
	return "404 Not Found";
}
exports.route=route;
