/* TAGS: String */

/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
Example:

Input: "cbbd"

Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
function reverse(s) {
	var o = '';
	for (var i = s.length - 1; i >= 0; i--)
		o += s[i];
	return o;
}

function isPalindrome(s) {
	var length = s.length;
	for (var i = 0; i < length / 2; ++i) {
		if (s[i] !== s[length - i - 1]) {
			return 0;
		}
	}
	return 1;
}
var longestPalindrome = function(s) {
	var rs = reverse(s);
	// 	console.log(rs);
	if (rs === s) {
		return s;
	}
	var i, j,
		lgstlen = 0,
		cost = 0,
		begin = 0,
		maxcost = 0,
		res = "",
		tmpres = "",
		slen = s.length,
		rslen = rs.length;
	var p = [slen],
		d = [rslen];
	for (i = 0; i < slen; ++i) {
		for (j = 0; j < rslen; ++j) {
			if (s[i] !== rs[j]) {
				cost = 0;
			} 
			else {
				cost = (i === 0 || j === 0) ? 1 : (p[j - 1] + 1);
				maxcost = (cost > maxcost) ? cost : maxcost;
			}
			d[j] = cost;
		}
		for (var k = 0; k <= slen; ++k) {
			tmp = p[k];
			p[k] = d[k];
			d[k] = tmp;
		}
		if (maxcost > lgstlen && isPalindrome(tmpres = s.substr(i - maxcost + 1, maxcost))) {
			// console.log(tmpres + " " + i + " " + cost);
			lgstlen = maxcost;
			res = tmpres;
		}
	}
	return res;
};
/* beats 2% */