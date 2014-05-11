var express = require('express');
var router = express.Router();
var crypto=require('crypto');
var User=require('../lib/user.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Micro Blog'});
});

router.get('/list',function(req,res){
	res.render('list',{
		title:'List',
		items:[1991,'tim','express','Node.js' ]
	});
});

router.get('/u/:user',function(req,res){

});

router.post('/post',function(req,res){

		});

router.get('/reg',function(req,res){
	res.render("reg",{title:'用户注册'});
});

router.post('/reg',function(req,res){
	if(req.body['password-repeat'] != req.body['password']){
		req.flash('error','两次输入的口令不一致');
		return res.render('reg',{title:'用户注册',error:'两次输入的口令不一致'});
	}

	//生成口令的散列值
	var md5=crypto.createHash('md5');
	var password = md5.update(req.body.password).digest('base64');
	
	var newUser=new User({
		name:req.body.username,
		password:password
		});
	
	//检查用户名是否已经存在
	User.get(newUser.name,function(err,user){
		if(user)
			err= 'Username already exists.';	
		if(err){
			return res.render("reg",{title:'用户注册',error:err});
		}
		
		//如果不存在则新增用户
		newUser.save(function(err){
			if(err){
				return res.render('reg',{title:'用户注册',error:err});
			}	
			req.session.user=newUser;
			//req.flash('success','注册成功');
			res.redirect('/');
		});
	});
});

router.get('/login',function(req,res){

		});

router.post('/login',function(req,res){

		});

router.get('logout',function(req,res){

		});

module.exports = router;
