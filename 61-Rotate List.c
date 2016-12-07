/*
TAGS: Linked List, Two Pointers.
Given a list, rotate the list to the right by k places, where k is non-negative.

For example:
Given 1->2->3->4->5->NULL and k = 2,
return 4->5->1->2->3->NULL.
*/
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* rotateRight(struct ListNode* head, int k) {
    if(head == NULL || head->next == NULL){
        return head;
    }
    struct ListNode* front, *end = head, *tmp, *res;
    int count = 1;
    while(end->next != NULL){
        end = end->next;
        count++;
    }
    printf("%d",count);
    tmp = end;
    end->next = head;
    end = head;
    front = head;
    for(int i = 0; i < (k % count); ++i){
        end = end->next;
    }
    while(end != tmp->next){
        end = end->next;
        front = front->next;
    }
    while(end->next != front){
        end = end->next;
    }
    end->next = NULL;
    return front;
}