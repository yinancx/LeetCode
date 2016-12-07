/* TAGS: Two Pointers, String*/
/*
Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack.length === 0 || needle.length === 0){
        return (needle.length === 0) ? 0 : -1;
    }
    var i = 0;
    var len = needle.length;
    while(i < haystack.length && haystack.substr(i, len) != needle){
        ++i;
    }
    return (i == haystack.length) ? -1 : i;
};
