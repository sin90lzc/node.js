/**
 *
 * 使用构造函数创建对象，并实现继承结构
 * 只能实现对象实例属性的继承，不能继承原型
 *
 */
alert=console.log;
function Person(name)   //带参数的构造函数
{
 this.name = name;   //将参数值赋给this对象的属性
 this.SayHello = function() {alert("Hello, I'm " + this.name);};   //给this对象定义一个SayHello方法。
};

function Employee(name, salary)     //子构造函数
{
 Person.call(this, name);        //将this传给父构造函数
 this.salary = salary;       //设置一个this的salary属性
 this.ShowMeTheMoney = function() {alert(this.name + " $" + this.salary);};  //添加ShowMeTheMoney方法。
};

var BillGates = new Person("Bill Gates");   //用Person构造函数创建BillGates对象
var SteveJobs = new Employee("Steve Jobs", 1234);   //用Empolyee构造函数创建SteveJobs对象

BillGates.SayHello();   //显示：I'm Bill Gates
SteveJobs.SayHello();   //显示：I'm Steve Jobs
SteveJobs.ShowMeTheMoney();   //显示：Steve Jobs $1234

alert(BillGates.constructor == Person);  //显示：true
alert(SteveJobs.constructor == Employee);  //显示：true

alert(BillGates.SayHello == SteveJobs.SayHello); //显示：false
