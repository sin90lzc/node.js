var debug=require("debug")("h");
var tty=require("tty");
var istty=tty.isatty(2);

console.log(istty);

debug("%s,%d","hello world",1);
