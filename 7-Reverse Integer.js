/* TAGS: Math*/

/*
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

click to show spoilers.

Have you thought about this?
Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!

If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.

Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?

For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

Update (2014-11-10):
Test cases had been added to test the overflow behavior.
*/

/**
 * @param {number} x
 * @return {number}
 */
function reversee(s) {
	var o = '';
	for (var i = s.length - 1; i >= 0; i--)
		o += s[i];
	return o;
}
var reverse = function(x) {
    console.log(typeof(x))
    res = parseInt(reversee(x.toString()));
    if(res > 2147483647){
        return 0;
    }
    return (x < 0) ? res * (-1) : res;
};
/* beats 56% */