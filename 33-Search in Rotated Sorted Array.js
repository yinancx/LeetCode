/* TAGS: Binary Search, Array
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 function sch(nums, tar, l, r){
 	for(var i = l; i < r; i++){
 		if(tar == nums[i]){
 			return i;
 		}
 	}
 	return -1;
 }
var search = function(nums, target) {
	var i, last = nums[0];
	for(i = 0; i < nums.length; ++i){
		if(last > nums[i]){
			break;
		}
	}
	if(target >= nums[i]){
		return (t = sch(nums, target, i, nums.length)) == -1 ? sch(nums, target, 0, i) : t;
	}
	else{
		return (t = sch(nums, target, 0, i)) == -1 ? sch(nums, target, i, nums.length) : t;
	}
};
