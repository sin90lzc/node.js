/**
 *
 * 这里的require方法可以把外部的js文件当作是一个子模块来调用。
 */
var server=require("./server");
var router=require("./router");
server.start(router.route);
