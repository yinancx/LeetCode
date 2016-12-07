/* TAGS: Array, Two Pointers*/
/*
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var minhgt = 0,
        res = 0,
        i = 0,
        j = height.length - 1;
    while(i < j){
    	if(height[i] >= height[j]){
    		minhgt = height[j];
    		res = (minhgt * (j - i) > res) ? minhgt * (j - i) : res;
    		--j;
    	}
    	else {
    		minhgt = height[i];
    		res = (minhgt * (j - i) > res) ? minhgt * (j - i) : res;
    		++i;
    	}
    }
    return res;
};
/* beats 36% */