/*TAGS :Array, Hash Table*/

/*Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
UPDATE (2016/2/13):
The return format had been changed to zero-based indices. Please read the above updated description carefully.
*/


/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target) {
    int *sum;
    sum = malloc(sizeof(int) * 2);
    for(int i = 0; i < numsSize; i++){
        for(int j = 0; j < numsSize; j++){
            if( ( i != j ) && ( nums[i] + nums[j]) == target ){
                sum[0] = i;
                sum[1] = j;
                return sum;
            }
        }
    }
    return 0;
}
/* beats 3.21% */