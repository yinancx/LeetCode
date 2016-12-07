/* TAGS: Array*/
/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function swap(nums, i, j){
	var t = nums[i];
	nums[i] = nums[j];
	nums[j] = t;
	return nums;
}
var nextPermutation = function(nums) {
	if (nums.length === 0 || nums.length === 1) {
		return;
	}
	var flag = 0;
	for (var i = nums.length - 1; i >= 0; --i) {
		if (nums[i - 1] < nums[i]) {
			for(var j = i, des = j; j < nums.length; ++j){
				des = (nums[j] < nums[des] && nums[j] > nums[i - 1]) ? j : des;
			}
			nums = swap(nums, i - 1, des);
			for(var j, tmp, p = i + 1; p < nums.length; ++p){
				tmp = nums[p];
				for(j = p; j > i && nums[j - 1] > tmp; --j){
					nums[j] = nums[j - 1];
				}
				nums[j] = tmp;
			}
			flag = 1;
			break;
		}
	}
	if(flag === 0){
		for(var i = 0; i < Math.floor(nums.length / 2); ++i){
			nums = swap(nums, i, nums.length - i - 1);
		}
	}
};