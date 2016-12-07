/* TAGS: Linked List*/
/*
Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
*/

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* swapPairs(struct ListNode* head) {
	if (head == NULL || head->next == NULL) {
		return head;
	}
	struct ListNode* headp = malloc(sizeof(struct ListNode));
	headp->next = head;
	struct ListNode* p = headp;
	head = p->next->next;
	while (p && p->next && p->next->next) {
	    
		struct ListNode* tmp = p->next->next;
		p->next->next = p->next->next->next;
		tmp->next = p->next;
		p->next = tmp;
		p = p->next->next;
	}
	return head;
}