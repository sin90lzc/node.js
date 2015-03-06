alert=console.log;
function WhoAmI()       //定义一个函数WhoAmI
{
	alert("I'm " + this.name + " of " + typeof(this));
};

WhoAmI();   //此时是this当前这段代码的全局对象，在浏览器中就是window对象，其name属性为空字符串。输出：I'm of object
//在node.js中输出：I'm undefined of object

var BillGates = {name: "Bill Gates"};
BillGates.WhoAmI = WhoAmI;  //将函数WhoAmI作为BillGates的方法。
BillGates.WhoAmI();         //此时的this是BillGates。输出：I'm Bill Gates of object

var SteveJobs = {name: "Steve Jobs"};
SteveJobs.WhoAmI = WhoAmI;  //将函数WhoAmI作为SteveJobs的方法。
SteveJobs.WhoAmI();         //此时的this是SteveJobs。输出：I'm Steve Jobs of object

WhoAmI.call(BillGates);     //直接将BillGates作为this，调用WhoAmI。输出：I'm Bill Gates of object
WhoAmI.call(SteveJobs);     //直接将SteveJobs作为this，调用WhoAmI。输出：I'm Steve Jobs of object

BillGates.WhoAmI.call(SteveJobs);   //将SteveJobs作为this，却调用BillGates的WhoAmI方法。输出：I'm Steve Jobs of object
SteveJobs.WhoAmI.call(BillGates);   //将BillGates作为this，却调用SteveJobs的WhoAmI方法。输出：I'm Bill Gates of object

WhoAmI.WhoAmI = WhoAmI;     //将WhoAmI函数设置为自身的方法。
WhoAmI.name = "WhoAmI";
WhoAmI.WhoAmI();            //此时的this是WhoAmI函数自己。输出：I'm WhoAmI of function

({name: "nobody", WhoAmI: WhoAmI}).WhoAmI();    //临时创建一个匿名对象并设置属性后调用WhoAmI方法。输出：I'm nobody of object

//构造函数部分
//part1
function MyFunc(){};
var anObj=new MyFunc();

//part2
var otherObj={};
otherObj.__proto__=MyFunc.prototype;
MyFunc.call(otherObj);
//part1与part2创建对象的方式是没有区别的。我们可以理解成new操作符先创建一个空对象，空对象的__proto__为构造函数的prototype,然后用这个空对象调用构造函数。而this即指向这个空对象了。

alert("anObj.constructor===otherObj.constructor:"+(anObj.constructor===otherObj.constructor));
alert("otherObj instanceof MyFunc:"+(otherObj instanceof MyFunc));


alert(anObj.constructor);
alert(otherObj.constructor);
