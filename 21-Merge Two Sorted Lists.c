/* TAGS: Linked List*/
/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

*/

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2) {
    if(l1 == NULL || l2 == NULL){
        return (l1 == NULL) ? l2 : l1;
    }
	struct ListNode* p1, *p2;
	int flag;
	if(l1->val <= l2->val){
		p1 = l1;
		p2 = l2;
		flag = 1;
	}
	else{
		p1 = l2;
		p2 = l1;
		flag = 2;
	}
	while(p1->next != NULL && p2 != NULL){
		if(p2->val >= p1->val && p2->val <= p1->next->val){
			struct ListNode* tmp = p2->next;
			p2->next = p1->next;
			p1->next = p2;
			p1 = p1->next;
			p2 = tmp;
		}
		else if(p2->val > p1->next->val){
			p1 = p1->next;
		}
	}
	if(p1 && p1->next == NULL){
		p1->next = p2;
	}
	else if(p2 && p2->next == NULL){
	    while(p1->next != NULL){
	    	p1 = p1->next;
	    }
	    p1->next = p2;
	}
	return (flag == 1) ? l1 : l2;
}
