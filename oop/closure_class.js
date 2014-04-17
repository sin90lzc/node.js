/**
 *
 *
 * 用闭包来定义类
 * 这种方法有个很大的弊端，需要为每个对象保存一份方法的副本，造成资源浪费及增加垃圾回收的难度。
 */
alert=console.log;
function Person(firstName, lastName, age)
{
        //私有变量：
	var _firstName = firstName;
	var _lastName = lastName;

	//公共变量:
	this.age = age;

	//方法：
	this.getName = function()
	{
	    return(_firstName + " " + _lastName);
	};
	this.SayHello = function()
	{
		alert("Hello, I'm " + _firstName + " " + _lastName);
	};
};
                                                                                                                                
var BillGates = new Person("Bill", "Gates", 53);
var SteveJobs = new Person("Steve", "Jobs", 53);
BillGates.SayHello();
SteveJobs.SayHello();
alert(BillGates.getName() + " " + BillGates.age);
alert(BillGates.firstName);     //这里不能访问到私有变量
