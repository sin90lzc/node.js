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

function checkUserLogin(req,res,next){
	if(req.session.user){
		res.redirect("/");
	}else{
		next();
	}
}
/**
 * 此处两个/reg，使用了堆栈的数据结构，先处理第一个/reg，再处理下一个/reg
 */
router.get('/reg',checkUserLogin);

router.get('/reg',function(req,res){
	res.render("reg",{title:'用户注册',error:req.flash("error")});
});

router.post('/reg',function(req,res){
	if(req.body['password-repeat'] != req.body['password']){
		req.flash('error','两次输入的口令不一致');
		res.redirect("/reg");
		//return res.render('reg',{title:'用户注册',error:'两次输入的口令不一致'});
		return;
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

router.get('/login',checkUserLogin);
router.get('/login',function(req,res){
	res.render('login',{title:'登陆',error:req.flash('error')})
		});

router.post('/login',function(req,res){

	//生成口令的散列值
	var md5=crypto.createHash('md5');
	var password = md5.update(req.body.password).digest('base64');
	
	var newUser=new User({
		name:req.body.username,
		password:password
		});
	
	//检查用户名是否已经存在
	User.get(newUser.name,function(err,user){
		if(!user){
			err= 'Username already exists.';	
		}
		if(user.password!=password){
			err= '帐号或者密码错误!';
		}
		if(err){
			req.flash('error',err);
			return	res.redirect("/login");
		}
		req.session.user=user;
		res.redirect('/');	
	});

});

router.get('/logout',function(req,res){
	req.session.user=null;
	res.redirect("/");
		});

module.exports = router;
