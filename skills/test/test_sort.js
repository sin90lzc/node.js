var sort=require("../sort");
var assert=require("assert");
describe("sort",function(){
	var arr=[];
	beforeEach(function(){
		arr=[];
		for(var i=0;i<10000;i++)
			arr.push(Math.round(Math.random()*10000));
	});	
	function judge(arr){
		for(var i=0;i<arr.length-1;i++){
			assert.ok(arr[i]<=arr[i+1]);
		}
	}
	describe("#sortByQuickSort",function(){
		it("should use quick sort method sort arr by asc",function(){
			var testTime=Date.now()
			sort.sortByQuickSort(arr);
			console.log("sort by quickSort use %d ms",Date.now()-testTime);
			//console.log(arr);
			judge(arr);
		})
	})
	describe("#sortByMaoPao",function(){
		it("should sort arr by asc",function(){
			var testTime=Date.now()
			sort.sortByMaoPao(arr);
			console.log("sort by MaoPao use %d ms",Date.now()-testTime);
			judge(arr);
		})
	})
})
