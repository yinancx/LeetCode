/* TAGS: Stack, String*/
/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.


*/

struct Node;
typedef struct Node *P;
typedef P Stack;

Stack Create();
int isEmpty(Stack S);
void MakeEmpty(Stack S);
void Push(Stack S, char X);
char Top(Stack S);
void Pop(Stack S);
struct Node
{
	char element;
	P next;
};

bool isValid(char* s) {
    // if(!s[1]){
    //     return false;
    // }
	Stack S = Create();
	for (int i = 0; s[i] != 0; ++i)
	{
		if(s[i] == '(' || s[i] == '{' || s[i] == '['){
			Push(S, s[i]);
		}
		else if(s[i] == ')' || s[i] == '}' || s[i] == ']'){
			switch (Top(S)){
				case '(':
					if(s[i] == ')')
						Pop(S);
					else {
						return false;
					}
					break;
				case '{':
					if(s[i] == '}')
						Pop(S);
					else {
						return false;
					}
					break;
				case '[':
					if(s[i] == ']')
						Pop(S);
					else {
						return false;
					}
					break;
				default:
				    return false;
			}
		}
	}
	return isEmpty(S) ? true : false;
}
Stack Create() {
	Stack S;
	S = (struct Node *)malloc(sizeof(struct Node));
	S->next = NULL;
	return S;
}
int isEmpty(Stack S) {
	return S->next == NULL;
}
void Push(Stack S, char X) {
	P TmpCell;
	TmpCell = (struct Node *)malloc(sizeof(struct Node));

	TmpCell->element = X;
	TmpCell->next = S->next;
	S->next = TmpCell;
}
char Top(Stack S) {
	return isEmpty( S ) ? 0 : S->next->element;
}
void Pop(Stack S) {
	if (!isEmpty(S)) {
		S->next = S->next->next;
	}
}