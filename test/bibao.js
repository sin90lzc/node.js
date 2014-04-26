function goHome(){
	this.b=1;
	this.a=function(){
		return b;	
	}
	console.log(this);
}


goHome();
