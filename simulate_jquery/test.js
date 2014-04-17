var regx=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
var ret=regx.exec("#hello");
console.log(ret);


var r=/c(at)\d(,c)/;
var s=r.exec("decat2,cat8");
console.log(s);


function Test(){};

function AA(){};

AA.prototype=Test.prototype;

var aa=new AA();
console.log(aa instanceof Test);

