/* TAGS: Array, Two Pointers*/
/*
Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
*/

int removeDuplicates(int* nums, int numsSize) {
	if (numsSize <= 1) {
		return numsSize;
	}
	int head = nums[0] - 1;
	for (int t, i = 1; i < numsSize; ) {
		if (nums[i] == nums[i - 1]) {
			t = nums[i - 1];
			while (nums[i] == t) {
				nums[i] = head;
				++i;
			}
		}
		else{
		    ++i;
		}
	}
	for (int i = 1, rec = -1, flag = 0; i < numsSize; ++i) {
		if (nums[i] == head && flag == 0) {
			rec = i;
			flag = 1;
		}
		else if (nums[i] != head && rec != -1) {
			nums[rec] = nums[i];
			nums[i] = head;
			i = rec;
			rec = -1;
			flag = 0;
		}
	}

	{
	    int count = 1;
	    for(int i = 1; i < numsSize && nums[i] != head; ++i){
	        count++;
	    }
	    return count;
	}
}
