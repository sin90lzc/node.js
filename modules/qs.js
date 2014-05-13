var qs=require("qs");

var reqStr="name=tim&body[foot]=foot&body[hand]=hand&queue[0]=0&queue[1]=1";

var reqBody=qs.parse(reqStr);

console.log(reqBody);
