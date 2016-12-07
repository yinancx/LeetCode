/* TAGS: Math, String*/
/*
Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
	k = Math.floor( num / 1000 );
	h5 = Math.floor( num % 1000 / 500 );
	h = Math.floor( num % 1000 % 500 / 100 );
	t5 = Math.floor( num % 1000 % 500 % 100 / 50 );
	t = Math.floor( num % 1000 % 500 % 100 % 50 / 10 );
	a5 = Math.floor( num % 1000 % 500 % 100 % 50 % 10 / 5 );
	a = Math.floor( num % 1000 % 500 % 100 % 50 % 10 % 5 );
	return 'M'.repeat(k)
		 + ( (h5 == 1 && h == 4) ? "CM" : ((h == 4) ? "CD" : ('D'.repeat(h5) + 'C'.repeat(h))) )
		  + ( (t5 == 1 && t == 4) ? "XC" : ((t == 4) ? "XL" : ('L'.repeat(t5) + 'X'.repeat(t))) )
		   + ( (a5 == 1 && a == 4) ? "IX" : ((a == 4) ? "IV" : ('V'.repeat(a5) + 'I'.repeat(a))) );
};
