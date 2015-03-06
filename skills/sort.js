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
 * 原理：把数组看成是二叉树，并把二叉树排列成大根堆二叉树（算法的核心思想），大根堆二叉树是指所有父节点的值都比子节点大。
 * 因此位于最顶端的父节点一定是最大值，取出最大值，把剩余的数再次排列成大根堆二叉数，再取出次大值，如此循环...
 *
 * 核心计算公式：
 * 最后一个二叉树的父节点序号：arr.length/2-1
 * 父节点左边子节点序号：parent*2+1
 * 父节点右边子节点序号：parent*2+2
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

/**
 *
 * 直接插入排序算法
 * 
 * 原理：就像玩卡牌把卡牌排序一样，从牌堆中拿牌，第一次拿两张牌，如果第二张牌比第一张牌小，则把第二张牌向第一张牌插入，此时第一，第二张牌是已排序的了，接着取第三张牌，如果比第二张牌小，但比第一张牌大，则插入到两者中间...如此类推。应用到数组中，我们把整个数组看成是一个牌堆，逐次从数组中取数并插入到合适的位置
 *
 * 首先把数组的第一个元素看成是已排序的数组（因为只有一个元素，不用排就已经是有序的了），第二个元素就在前面那个已排序的数组中插入。那么前两个元素就已经是有序的了，接着把第三个元素向前面有序数组插入。
 */
sort.sortByDirectInsert=function(arr){
	for(var i=1;i<arr.length;i++){
		var temp=arr[i];
		var j=i-1;
		for(;j>=0&&temp<arr[j];j--){
			arr[j+1]=arr[j];
		}
		arr[j+1]=temp;
	}	
};

/**
 *
 * 希尔排序算法
 *
 * 原理：希尔排序是直接插入排序的优化版，取相同步长(一般首次是数组长度的一半，第二次是上一次的一半，以此类推，直到步长为1。其实直接插入排序就是只进行了一次插入排序，而步长为1）的元素为一组，应用直接插入排序算法。
 */
sort.sortByShell=function(arr){
	var step=Math.floor(arr.length/2);
	while(step>=1){
		for(var i=step;i<arr.length;i++){
			var temp=arr[i];
			var j=i-step;
			for(;j>=0&&temp<arr[j];j=j-step){
				arr[j+step]=arr[j];
			}
			arr[j+step]=temp;
		}
		step=Math.floor(step/2);
	}

}

