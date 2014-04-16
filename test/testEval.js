

function main(){
	var ret1=eval('"a2"');
	console.log('eval(\'"a2"\')='+ret1);
	var ret2=eval('{}');
	console.log('eval("{}")='+ret2);
	var ret3=eval("({a:2})");
	console.log('eval("({a:2})")='+ret3);
	console.log(ret3.a);

}

main();
