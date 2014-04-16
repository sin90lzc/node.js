//start方法用于启动服务
function start(route){
	var http=require("http");
	var url=require("url");
	var port=8888;
	http.createServer(function(request,response){
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		request.setEncoding("utf8");

		request.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
			console.log("Received POST data chunk '"+
			postDataChunk + "'.");
		});

		request.addListener("end", function() {
			route(pathname, response, postData);
		});
		console.log("Request for "+pathname+" received.");
	}).listen(port);
	console.log("Server has started!listen port is "+ port);
}
//exports用于指定该js模块文件可以对外暴露的方法，如果没有exports的方法，就有点private的味道了。
exports.start=start;
