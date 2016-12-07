/*
TAGS: Hash Table, String.
Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
Return:

[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note: All inputs will be in lower-case.
*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function isEqual(a, b){
    for(var i = 0; i < 25; ++i){
        if(a[i] !== b[i]){
            return false;
        }
    }
    return true;
}
var groupAnagrams = function(strs) {
    var res = [];
    var hash = new Array(26);
    var lenhash = new Array(40);
    var len = strs.length;
    for (var i = 0, t = 0; i < len; ++i) {
        hash[i] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        for (var j = 0; j < strs[i].length; ++j) {
            hash[i][strs[i][j].charCodeAt() - 97] += 1;
        }
        if(!(lenhash[strs[i].length])){
            lenhash[strs[i].length] = [];
        }
        lenhash[strs[i].length].push(i);
    }
    for (var k = 0, n = 0; k < lenhash.length; ++k) {
        if (lenhash[k]) {
            for (var l = 0; l < lenhash[k].length; ++l) {
                if(strs[ lenhash[k][l] ] === "0"){
                    continue;
                }
                res[n++] = [];
                res[n - 1].push(strs[ lenhash[k][l] ]);
                for(var m = l + 1; m < lenhash[k].length; ++m){
                    if(strs[ lenhash[k][m] ] !== "0" && isEqual( hash[ lenhash[k][m] ], hash[ lenhash[k][l] ] )) {
                        res[n - 1].push(strs[ lenhash[k][m] ]);
                        strs[ lenhash[k][m] ] = "0";
                    }
                }
            }
        }
    }
    return res;
};
