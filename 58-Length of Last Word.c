/*
TAGS: String
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example, 
Given s = "Hello World",
return 5.
*/
int lengthOfLastWord(char* s) {
    int begin = -1, end = strlen(s) - 1;
    if(end == -1){
        return 0;
    }
    while(end >= 0){
        if((s[end] >= 'a' && s[end] <= 'z') || (s[end] >= 'A' && s[end] <= 'Z')){
            break;
        }
        --end;
    }
    for(int j = end; j >= 0; --j){
        if(s[j] == ' '){
            begin = j;
            break;
        }
    }
    // printf("%d %d",end,begin);
    return end - begin;
}