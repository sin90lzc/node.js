/**
 *
 * 正则表达式相关代码
 *
 */

var assert=require("assert");

/**
 *
 * (?:pattern)的用法
 * 需要匹配pattern并可作为匹配返回，但该括号不划入分组,
 */
(function(){
	var regex=/(he(llo)|world)/
	var ret=regex.exec("hello");
	assert.equal(ret[0],"hello");
	assert.equal(ret[1],"hello");
	assert.equal(ret[2],"llo");
	assert.equal(ret.length,3);
	regex=/(?:he(llo)|world)/
	ret=regex.exec("hello");
	assert.equal(ret[0],"hello");
	assert.equal(ret[1],"llo");
	assert.equal(ret.length,2);

 })();


/**
 *
 * (?=pattern)的用法
 * 需要匹配pattern,但不作为匹配返回，并且该括号不划入分组 
 *
 */
(function(){
 	var regex=/hello(world)/
	var ret=regex.exec("helloworld");
	assert.equal(ret[0],"helloworld");
	assert.equal(ret[1],"world");
	assert.equal(ret.length,2);
	regex=/hello(?=world)/
	ret=regex.exec("helloworld");
	assert.equal(ret[0],"hello");
	assert.notEqual(ret[1],"world");
	assert.equal(ret.length,1);
 })();


/**
 *
 * (?!pattern)的用法
 * 不能匹配pattern,并且不作为匹配返回，并且该括号不划入分组
 */
(function(){
	var regex=/hello(word)/
	var ret=regex.exec("helloworld");
	assert.ok(ret==null);
	regex=/hello(?!word)/
	ret=regex.exec("helloworld");
	assert.equal(ret[0],"hello");
	assert.equal(ret.length,1);
 })();
