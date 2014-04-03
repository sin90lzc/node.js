function start(route){
	var http=require("http");
	var url=require("url");

	http.createServer(function(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		route(pathname, response,request);
	}).listen(9999);
	console.log("Server has started");
}
exports.start=start;
