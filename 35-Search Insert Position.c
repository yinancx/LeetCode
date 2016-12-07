/* TAGS: Array, Binary Search */
/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.
[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0
*/
 
int searchInsert(int* nums, int numsSize, int target) {
    if(numsSize == 0 || numsSize == 1 || nums[0] > target || nums[numsSize - 1] < target){
        if(numsSize == 0){
        	return 0;
        }
        else if(numsSize == 1){
        	return nums[0] < target ? 1 : 0;
        }
        else if(nums[0] > target){
        	return 0;
        }
        else if(nums[numsSize - 1] < target){
        	return numsSize;
        }
    }
	int l = 0, r = numsSize - 1;
	for(; l <= r; ){
		if(nums[(l + r) / 2] < target){
			l = (l + r) / 2;
		}
		else if(nums[(l + r) / 2] > target){
			r = (l + r) / 2;
		}
		else{
			return (l + r) / 2;
		}
		if(l + 1 == r){
			return nums[l] == target ? l : r;
		}
		if(l == r){
		    return l;
		}
	}
	return;
}
