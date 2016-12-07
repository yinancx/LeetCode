/* TAGS: String*/
/*
Write a function to find the longest common prefix string amongst an array of strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if (strs.length <= 1 || strs[0].length === 0) {
		return strs[0] || "";
	}
	var i, j;
	for(i = 0; i < strs[0].length; ++i){
		for(j = 1; j < strs.length; ++j){
			if(strs[j][i] !== strs[0][i]){
				return strs[0].substring(0, i);
			}
		}
	}
	return strs[0].substring(0, i + 1);
};