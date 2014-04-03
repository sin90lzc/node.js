/**
 *
 * 实际的业务处理都在这里面了。
 *
 */
var exec=require("child_process").exec;
var queryString=require("querystring");
function start(response,postData){
	console.log("Request handler 'start' was called.");
	  var body = '<html>'+
		      '<head>'+
		          '<meta http-equiv="Content-Type" content="text/html; '+
			      'charset=UTF-8" />'+
			          '</head>'+
				      '<body>'+
				          '<form action="/upload" method="post">'+
					      '<textarea name="text" rows="20" cols="60"></textarea>'+
					          '<input type="submit" value="Submit text" />'+
						      '</form>'+
						          '</body>'+
							      '</html>';


	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write(body);
	response.end();
}

function upload(response,postData){
	console.log("Request handler 'upload' was called.");
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("you've sent text is \n"+queryString.parse(postData).text);
	response.end();
}
exports.start=start;
exports.upload=upload;