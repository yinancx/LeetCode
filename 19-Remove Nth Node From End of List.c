/* TAGS: Linked LIst, Two Pointers*/
/*
Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.
*/

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* removeNthFromEnd(struct ListNode* head, int n) {
    if(head->next == NULL){
        return head = NULL;
    }
    struct ListNode* back = malloc(sizeof(struct ListNode));
    back->next = head;
    struct ListNode* res = back->next;
 	struct ListNode* end;
 	end = head;
 	int count = 1;
 	if(n == 1){
 	    while(back->next->next != NULL){
 	        back = back->next;
 	    }
 	    back->next = NULL;
 	    return res;
 	}
 	for(int i = 0; i < n - 1 && end->next != NULL; ++i){
 		end = end->next;
 		count++;
 	}
 	while(end->next != NULL){
 		back = back->next;
 		end = end->next;
 		count++;
 	}
 	if(n == count){
 	    return res = res->next;
 	}
 	back->next = back->next->next;
 	
 	return res;
}
