/*
TAGS: Array.
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Follow up:
Could you do this in-place?
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var len = matrix.length;
    for (var i = 0; i < len / 2; ++i) {
        for (var j = 0; j < len - 1 - 2 * i; ++j) {
            console.log(i + ' ' + j);
            tmp = matrix[i + j][len - i - 1];
            matrix[i + j][len - i - 1] = matrix[i][i + j];
            tmp2 = matrix[len - i - 1][len - i - 1 - j];
            matrix[len - i - 1][len - i - 1 - j] = tmp;
            tmp3 = matrix[len - i - 1 - j][i];
            matrix[len - i - 1 - j][i] = tmp2;
            matrix[i][i + j] = tmp3;
        }
        // console.log(matrix);
    }
};