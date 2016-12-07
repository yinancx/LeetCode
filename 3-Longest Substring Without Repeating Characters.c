/*TAGS: Hash Table, Two Pointers,String */

/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

int lengthOfLongestSubstring(char* s) {
	int a[95], i = 0, length = 0, lgstlen = 0, tmp;
	
	for(int i = 0; i < 95; i++){
	    a[i] = 0;
	}
	for (i = 0; s[i] != 0 && lgstlen <= (strlen(s) - i) ; i++) {
	    tmp = i;
		while ( s[i] != 0 && a[ s[i] - ' ' ] != 1 ) {
			a[ s[i] - ' ' ] = 1;
			length++;
			i++;
// 		printf("%d a%d ",length,a[ s[i] - '!' ]);
		    
		}
		lgstlen = (length > lgstlen) ? length : lgstlen;
		length = 0;
		for(int i = 0; i < 95; i++){
	        a[i] = 0;
	    }
		i = tmp;
	}
	return lgstlen;
}
/* beats 10% */