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
 * 原理：
 * 在数组中取一个基数(一般是第一个元素)，并把该基数插入到数组中，使得该基数的左边元素都比它小，右边元素都比它大。这个基数将整个数组分割成两份数组了，接着对这两人个数组如法泡制（递归），直至分割的小数组只有基数一个元素
 *
 * 实现步骤:
 * 1.在数组中取第一个数做于基数
 * 2.取left指针指向数组第一个数，取right指针指向数组末尾，right指针从右向左移动，当right指针指向的数小于基数时，right指针指向的数替换left指针指向的数。
 * 3.接着left指针从左向右移动，当left指针指向的数大于基数时，left指针批向的数替换right指针指向的数。
 * 4.重复步骤2及步骤3，至到left指针>=right指针，此时把基数替换left指针指向的数.
 * 5.把由基数分割的两个数组重复执行步骤1->步骤4（递归）
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


/**
 *
 * 堆排序
 */
sort.sortByHeap=function(arr,topN){
	//使指定父节点下的二叉树按大根堆排列
	//length:限制受影响的子节点，不在length范围内的子节点，不参于大根堆排列
	function flowUp(arr,_parent,length){
		var p=arr[_parent];
		var child=2*_parent+1;
		while(child<length){
			if(child+1<length && arr[child+1]>arr[child]){
				child++;
			}
			if(arr[child]<=p){
				break;
			}
			arr[_parent]=arr[child];
			_parent=child;
			child=2*_parent+1;	
		}
		arr[_parent]=p;
	}	

	return (function(){
		//使整个二叉树按大根堆排列
		for(var i=arr.length/2-1;i>=0;i--){
			flowUp(arr,i,arr.length);
		}
		var limit=topN?arr.length-topN-1:0;	
		var topList=topN?[]:undefined;
		for(var i=arr.length-1;i>limit;i--){
			//由于现在数组的二叉树按大根堆排列，交换首尾元素意味着最大值的元素会被置于数组末尾
			var temp=arr[0];
			arr[0]=arr[i];
			arr[i]=temp;	
			if(topList)
				topList.push(temp);
			//由于按大根堆排列的二叉树，最大值必然会在二叉树顶层，而次大值必然会在第二层，而这里i值控制了数组的范围，使得已排序的最大值不受flowUp影响，因此再次执行一次flowUp,次大值将上浮至二叉树顶层
			flowUp(arr,0,i);
		}
		return topList || arr;
	})();
}
