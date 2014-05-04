/**
 *
 * Object下的函数使用示例
 */

/**
 *
 * Object.defineProperty(obj,prop,descriptor)
 *
 * descriptor包括下面的属性：
 * configurable:configurable为false,不能修改属性描述符，但若writable为true,还可修改writable为false,及value值。但writable修改为false后，就不可再修改为true了
 * enumerable:属性是否可枚举
 *
 * value:属性值
 * writable:boolean，是否可写
 *
 * set:一个函数，在写属性时调用该函数 
 * get:一个函数，在读取属性时调用该函数
 *
 * 其中value,writable与set,get不能同时存在descriptor中
 */
var assert=require("assert");
(function(){
//-----------------为{}添加一个可读写，可枚举属性name------------------------//
	var obj={};
	Object.defineProperty(obj,"name",{
		configurable:true,
		enumerable:true,
		writable:true,
		value:"tim"
	});
	assert.ok(obj.name==="tim");	
	obj.name="rain";//可对属性进行修改
	assert.ok(obj.name==="rain");	
	assert.ok(Object.keys(obj).length===1);
	for(var prop in obj)
		assert.ok(prop==="name");	


//------------为{}添加一个只读，不可枚举属性name--------------------------//
	obj={};
	Object.defineProperty(obj,"name",{
		configurable:true,
		enumerable:false,
		writable:false,
		value:"tim"
	});
	assert.ok(obj.name==="tim");
	obj.name="rain";//不可对属性进行修改
	assert.ok(obj.name==="tim");//属性没有修改
	assert.ok(Object.keys(obj).length===0);//属性不可枚举

	Object.defineProperty(obj,"name",{value:"rain"});
	assert.ok(obj.name==="rain"); //虽然name被定义为只读，但依然可以通过Object.defineProperty来修改属性值
	
//--------configurable为false,不能修改属性描述符，但若writable为true,还可修改writable为false,及value值。但writable修改为false后，就不可再修改为true了--------------------------------------//
	obj={};
	Object.defineProperty(obj,"name",{
		configurable:false,
		enumerable:true,
		writable:true,
		value:"tim"
	});
	assert.ok(obj.name==="tim");
	obj.name="rain";//可对属性进行修改
	assert.ok(obj.name==="rain");
	assert.ok(Object.keys(obj).length===1);//属性可枚举
	
	Object.defineProperty(obj,"name",{
		writable:false,
		value:"tim"
	});//虽然configurable为false，但如果writable为true，依然可对writable及value修改。
	assert.ok(Object.getOwnPropertyDescriptor(obj,"name").writable===false);
	assert.ok(obj.name==='tim');	
	
	try{
	Object.defineProperty(obj,"name",{
		writable:true,
		value:"rain"
	});//当configurable及writable都为false后，就不可以修改writable,及value了
	} catch(e){
		console.log("当configurable及writable都为false后，就不可以修改writable,及value了");
	}
	
//-----------------get/set属性描述使用-----------//
	obj={nick:"tim"}	
	Object.defineProperty(obj,"name",{
		configurable:true,
		enumerable:true,
		get:function(){return this.nick;},
		set:function(s){this.nick=s;}
	});
	assert.ok(obj.name==='tim');
	obj.name='rain';
	assert.ok(obj.name==='rain');
})();

/**
 * Object.create(prototype,descriptors)
 * 创建一个指定原型的对象，如果prototype为null，即该对象不存在原型链。
 * descriptors是一个包含多个属性描述符的对象
 */
(function(){
	//创建一个无原型链的对象，并且它有两人个属性，一个是age,一个是name
	var person=Object.create(null,{
		name:{
			value:"tim",
			enumerable:true
		},
		age:{
			value:18,
			enumerable:true
		}
	});
	assert.ok(person.name==="tim");
	assert.ok(person.age===18);
	assert.ok(Object.getPrototypeOf(person)===null);
})();
