var sort=require("../sort");
var assert=require("assert");
describe("sort",function(){
	var arr=[];
	beforeEach(function(){
		arr=[];
		for(var i=0;i<100000;i++)
			arr.push(Math.round(Math.random()*10000));
			//arr.push(i);
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
	describe("#sortByHeap",function(){
		it("should sort arr by heap method",function(){
			var testTime=Date.now()
			var temp=sort.sortByHeap(arr);
			console.log("sort by heap method use %d ms",Date.now()-testTime);
			judge(arr);
		})
	})
	describe("#sortByDirectInsert",function(){
		it("should sort arr by DirectInsert method",function(){
			var testTime=Date.now()
			sort.sortByDirectInsert(arr);	
			console.log("sort by DirectInsert method use %d ms",Date.now()-testTime);
			judge(arr);
		});
	});
	describe("#sortByShell",function(){
		it("should sort arr by Shell method",function(){
			var testTime=Date.now();
			sort.sortByShell(arr);
			console.log("sort by Shell method use %d ms",Date.now()-testTime);
			judge(arr);
		});
	});
})
