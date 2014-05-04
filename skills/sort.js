/**
 *
 * 使用javascript来实现各种排序算法
 */

sort=exports=module.exports=Object.create(null);

sort.MAOPAO="MAOPAO";
/**
 * 冒泡算法
 */
sort.sortByMaoPao=function(arr,order,comparor){
	if(!arr instanceof Array)
		throw new Error("入参必须是数组");
	for(var i=0;i<arr.length-1;i++){
		for(var j=0;j<arr.length-i;j++){
			if(arr[j]>arr[j+1]){
				var tmp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=tmp;
			}
		}
	}
}

/**
 *
 * 快排算法
 *
 */
sort.sortByQuickSort=function(arr){
	function division(arr,left,right){
		var base=arr[left];
		while(left<right){
			while(arr[right]>=base && left < right)
				right--;
			arr[left]=arr[right];

			while(arr[left]<=base && left < right)
				left++;
			arr[right]=arr[left];	
		}
		arr[left]=base;
		return left;
	}
	function quickSort(arr,left,right){
		if(left< right){
			var i=division(arr,left,right);
			quickSort(arr,left,i-1);
			quickSort(arr,i+1,right);
		}
	}	
	quickSort(arr,0,arr.length-1);
}
