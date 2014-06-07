var utils=require("utils-merge");

module.exports=function(options){
	return function(req,res,next){
		if(options){
			utils.inherits(res.locals,options);	
			options=null;
		}
		res.locals.session=res.locals.session?res.locals.session:req.session;
		res.locals.req=res.locals.req?res.locals.req:req;
		res.locals.res=res.locals.res?res.locals.res:res;	
		next();
	}

}
