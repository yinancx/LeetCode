/*
TAGS: Array, Two Pointers
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

    For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
	if (nums.length <= 3) {
		return nums.length === 3 ? nums[0] + nums[1] + nums[2] : 0;
	}
	var len = nums.length;
	for (var P = 1, j, Tmp; P < len; P++) {
		Tmp = nums[P];
		for (j = P; j > 0 && nums[j - 1] > Tmp; j--) {
			nums[j] = nums[j - 1];
		}
		nums[j] = Tmp;
	}
	var mid = 0;
	for (var i = 0, t = Math.abs(nums[0] - target); i < len; ++i) {
		mid = (Math.abs(nums[i] - target) <= Math.abs(nums[mid] - target)) ? i : mid;
	}
	if (mid === 0) {
        	mid = 1;
        	var res = nums[0] + nums[mid] + nums[len - 1];
	} 
	else {
		if (mid === len - 1) {
			mid -= 1;
		}
		var res = nums[0] + nums[mid] + nums[len - 1];
	}
	for (var i = 0; i < mid; ++i) {
		for (var j = len - 1; j > i; --j) {
			for (var k = i + 1; k < j; ++k) {
				if ((sum = nums[i] + nums[k] + nums[j]) === target) {
					return target;
				} 
				else {
					res = (Math.abs(sum - target) < Math.abs(res - target)) ? sum : res;
				}
			}
		}
	}
	return res;
};
