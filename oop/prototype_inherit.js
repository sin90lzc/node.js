/**
 *
 *原型继承的例子
 */
function Person(name)   //基类构造函数
{
 this.name = name;
};

Person.prototype.SayHello = function()  //给基类构造函数的prototype添加方法
{
 alert("Hello, I'm " + this.name);
};

function Employee(name, salary) //子类构造函数
{
 Person.call(this, name);    //调用基类构造函数
 this.salary = salary;
};

Employee.prototype = new Person();  //建一个基类的对象作为子类原型的原型，这里很有意思,这里就创建了一个原型链了。

Employee.prototype.ShowMeTheMoney = function()  //给子类添构造函数的prototype添加方法
{
 alert(this.name + " $" + this.salary);
};

var BillGates = new Person("Bill Gates");   //创建基类Person的BillGates对象
var SteveJobs = new Employee("Steve Jobs", 1234);   //创建子类Employee的SteveJobs对象

BillGates.SayHello();       //通过对象直接调用到prototype的方法
SteveJobs.SayHello();       //通过子类对象直接调用基类prototype的方法，关注！
SteveJobs.ShowMeTheMoney(); //通过子类对象直接调用子类prototype的方法

alert(BillGates.SayHello == SteveJobs.SayHello); //显示：true，表明prototype的方法是共享的
