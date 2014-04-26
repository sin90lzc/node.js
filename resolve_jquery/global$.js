//通过匿名函数保护内部变量，不让其向外导
//$这个全局变量引用了匿名函数内的函数,因此这里整个匿名函数就是一个闭包，内部的变量会一直存在
(function(global){
	var jQuery=function(selector,context){
		return new jQuery.fn.init(selector.context);
	};
	jQuery.fn=jQuery.prototype;
	//jQuery的构造函数
	jQuery.fn.init=function(selector,context){
		//jQuery对象的构造逻辑都写在这里
	}		
	//向外暴露$变量
	global.$=jQuery;
})(typeof window !=="undefined"?window:this);
