/* TAGS: Binary Search, Array*/
/*
Given a sorted array of integers, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length === 0 || nums.length === 1){
        return (nums[0] && nums[0] == target) ? [0,0] : [-1,-1];
    }
	var l = 0,
		r = nums.length - 1;
	for (; l <= r;) {
		if (nums[Math.floor((l + r) / 2)] < target) {
			l = Math.floor((l + r) / 2);
		} 
		else if (nums[Math.floor((l + r) / 2)] > target) {
			r = Math.floor((l + r) / 2);
		} 
		else {
			break;
		}
		if (l + 1 == r){
			if(nums[l] != target && nums[r] != target) {
				return [-1, -1];
			}
			else{
				return (nums[l] == target && nums[r] == target) ? [l, r] : ((nums[l] == target) ? [l, l] : [r, r]);
			}
		}
		else if (l == r){
		    return (nums[l] == target) ? [l, r] : [-1, -1];
		}
	}
	for (l = Math.floor((l + r) / 2), r = l; nums[l] == target || nums[r] == target; ) {
		if (nums[l] == target) {
			--l;
		}
		if (nums[r] == target) {
			++r;
		}
	}
	return [l + 1, r - 1];
};