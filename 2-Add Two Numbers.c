/* TAGS: Linked List Math */

/*
You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    struct ListNode* L;
    int sum, flag = 0, flag2 = 0;
    L = malloc(sizeof(struct ListNode));
    L->next = NULL;
    struct ListNode *P = L;
    do{
        struct ListNode* tmp;
        flag2 = (l1 == NULL) ? l2->val : ((l2 == NULL) ? l1->val : -1);
        sum = (flag2 == -1) ? (l1->val + l2->val + flag) % 10 : (flag2 + flag) % 10;
        flag = (flag2 == -1) ? (l1->val + l2->val + flag) / 10 : (flag2 + flag) / 10;
        tmp = malloc(sizeof(struct ListNode));
        tmp->val = sum;
        tmp->next = NULL;
        L->next = tmp;
        L = L->next;
        if(l1 != NULL){
            l1 = l1->next;
        }
        if(l2 != NULL){
            l2 = l2->next;
        }
    }while(l1 != NULL || l2 != NULL);
    if(flag != 0){
        struct ListNode* tmp;
        tmp = malloc(sizeof(struct ListNode));
        tmp->val = flag;
        tmp->next = NULL;
        L->next = tmp;
        L = L->next;
    }
    
    return P->next;
}
/* beats 69% */