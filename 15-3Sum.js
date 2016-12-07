/* TAGS: Array, Two Pointers*/
/*
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	var j, P, Tmp;
	var len = nums.length,
		dif, i, k, mid = 0,
		res = [],
		t = 0;
	if (len < 3) {
		return res;
	}
	for (P = 1; P < nums.length; P++) {
		Tmp = nums[P];
		for (j = P; j > 0 && nums[j - 1] > Tmp; j--) {
			nums[j] = nums[j - 1];
		}
		nums[j] = Tmp;
	}
	for (i = 0, count = 0; i < len; ++i) {
		if (Math.abs(nums[i]) < Math.abs(nums[mid])) {
			mid = i;
			count = 1;
		} 
		else if (Math.abs(nums[i]) === Math.abs(nums[mid])) {
			if (i !== mid && nums[i] === nums[mid]) {
				count++;
			}
			mid = i;
		}
	}
	mid -= Math.floor(count / 2);
	console.log(nums)
	console.log(mid)
	console.log(count)
	j = 0;
	for (i = 0; i < mid || (i === mid && j !== mid); ++i) {
		while (nums[i - 1] && nums[i] === nums[i - 1]) {
			++i;
			if (!(i < mid || (i === mid && j !== mid))) {
				break;
			}
		}
		for (j = len - 1; j > mid || (j === mid && i !== mid); --j) {
			while (nums[j + 1] && nums[j] === nums[j + 1]) {
				--j;
				if (!(j > mid || (j === mid && i !== mid))) {
					break;
				}
			}
			dif = 0 - (nums[i] + nums[j]);
			if (dif > nums[mid]) {
				k = mid;
				while (k < j && nums[k] <= dif) {
					if (nums[k++] === dif) {
						if (!(res[t - 1] && (res[t - 1][0] === nums[i] && res[t - 1][2] === nums[j])) && k - 1 !== i && k - 1 !== j) {
							res[t++] = [nums[i], nums[k - 1], nums[j]];
						}
						// nums[k - 1] = dif;
						break;
					}
				}
			} else if (dif < nums[mid]) {
				k = mid;
				while (k > i && nums[k] >= dif) {
					if (nums[k--] === dif) {
						if (!(res[t - 1] && (res[t - 1][0] === nums[i] && res[t - 1][2] === nums[j])) && k + 1 !== i && k + 1 !== j) {
							res[t++] = [nums[i], nums[k + 1], nums[j]];
						}
						// nums[k + 1] = dif;
						break;
					}
				}
			} else {
				if (!(res[t - 1] && (res[t - 1][0] === nums[i] && res[t - 1][2] === nums[j]))) {
					if (mid !== i && mid !== j) {
						res[t++] = [nums[i], nums[mid], nums[j]];
					} else if (count > 1 && mid + 1 !== i & mid + 1 !== j) {
						console.log(count)
						res[t++] = [nums[i], nums[mid + 1], nums[j]];
					}
					// nums[mid] = dif;
				}
			}
		}
	}
	return res;
};
/* beats 32% */