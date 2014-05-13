/**
 *
 * 在看过node.js中utils.inherits的继承之后，想到了多从继承还可以这么来
 */
//inherits方法抄自utils.inherits
function inherits(subCtor,superCtor){
	subCtor.super_=superCtor;
	subCtor.prototype=Object.create(superCtor.prototype,{
		constructor:{
			value:subCtor,
			enumberable:false,
			writable:true,
			configurable:true
		}
	});
}

function A(){};

function B(){};

inherits(A,B);

var a=new A();

console.log(a instanceof A);
