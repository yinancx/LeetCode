/*
TAGS: Array, Hash Table, Two Pointers
Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note: The solution set must not contain duplicate quadruplets.

For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function place(a, b, c, d) {
	var res = [];
	if (a >= d) {
		res = [d, a, b, c];
	} else if (b >= d) {
		res = [a, d, b, c];
	} else if (c >= d) {
		res = [a, b, d, c];
	} else {
		res = [a, b, c, d];
	}
	return res;
}
var fourSum = function(nums, target) {
	var len = nums.length;
	var res = [];
	if (len < 4) {
		return res;
	}
	for (var j, Tmp, P = 1; P < nums.length; P++) {
		Tmp = nums[P];
		for (j = P; j > 0 && nums[j - 1] > Tmp; j--) {
			nums[j] = nums[j - 1];
		}
		nums[j] = Tmp;
	}
	console.log(nums)
	var hash = new Array(200000000);
// 	console.log(hash[0]
	for (var i = 0, j = len - 1; nums[i] < 0 || nums[j] >= 0; ++i, --j) {
		if (nums[i] < 0) {
			hash[-nums[i]] = hash[-nums[i]] === undefined ? 1 : (hash[-nums[i]] + 1);
		}
		if (nums[j] >= 0) {
			hash[100000000 + nums[j]] = hash[100000000 + nums[j]] === undefined ? 1 : (hash[100000000 + nums[j]] + 1);
		}
	}
// 	console.log(hash[5] + " " + hash[4] + " " + hash[1001])
// console.log(!hash[1200])
	var trisum = [];
	var table = [];
	for (var i = 0, n = 0, lasti = undefined; i < len - 2; ++i) {
		if (nums[i] === lasti) {
			continue;
		}
		for (var j = i + 1, lastj = undefined; j < len - 1; ++j) {
			if (nums[j] === lastj) {
				continue;
			}
			for (var k = j + 1, dif, difhs, tmp, lastk = undefined, sum, flag = 0; k < len; ++k) {
				if (k !== j + 1 && nums[k] === lastk) {
					continue;
				}
				lastk = nums[k];
				dif = target - (nums[i] + nums[j] + nums[k]);
				difhs = dif < 0 ? -dif : (100000000 + dif);
				if (dif <= -100000000 || dif >= 100000000 || !hash[difhs]) {
					continue;
				}
				// console.log(nums[i] + " " + nums[j] + " " + nums[k] + " " + dif)
				if (dif == nums[i] || dif == nums[j] || dif == nums[k]) {
					tmp = hash[difhs];
					if(nums[i] == dif){
						--tmp;
					}
					if(nums[j] == dif){
						--tmp;
					}
					if(nums[k] == dif){
						--tmp;
					}
					if(tmp <= 0){
						continue;
					}
				}
				
				sum = place(nums[i], nums[j], nums[k], dif);
				// console.log(sum.toString())
				for(var m = 0; m < n; ++m){
					if(table[m] === sum.toString()){
						flag = 1;
						break;
					}
				}
				if(flag != 1){
					trisum[n++] = sum;
					table[n - 1] = sum.toString();
					flag = 0;
				}
			}
			lastj = nums[j];
		}
		lasti = nums[i];
	}
// 	console.log(table)
	return trisum;
};