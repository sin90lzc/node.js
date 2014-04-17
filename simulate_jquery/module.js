(function(){
	var object={
		isInheritFrom:function(obj){
			var type=this.Type;
			while(type){
				if(type==obj){
					return true;
				}
				type=type.Type;
			}	
			return false;
		}

	};

	var Clazz=function(baseClass,classDefine){
		function _clazz(){
			this.Type=baseClass;
			for(var prop in classDefine){
				this[prop]=classDefine[prop];
			}
		}	
		_clazz.prototype=baseClass;
		return new _clazz();
	}	
	var New=function(clazz,params){
		function _new(){
			this.Type=clazz;
			if(clazz.create && typeof(clazz.create)=='function')
			clazz.create.apply(this,params);
		}
		_new.prototype=clazz;
		return new _new();

	}
})();
