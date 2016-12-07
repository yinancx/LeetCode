/*
TAGS: Array, Binary Search.
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
For example,

Consider the following matrix:

[
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
Given target = 3, return true.
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var tar = 0;
    for(var i = 0; i < matrix.length; ++i){
        if(matrix[i][0] <= target){
            tar = i;
        }
    }
    for(var i = 0; i < matrix[tar].length; ++i){
        if(matrix[tar][i] === target){
            return true;
        }
    }
    return false;
};