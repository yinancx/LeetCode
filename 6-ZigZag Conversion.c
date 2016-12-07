/*TAGS: String */

/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
*/

char* convert(char* s, int numRows) {
    int row, col, length, tmp, pos = 0;
    char arr[1000][1000];
    char res[1000000] = {0};
    char *resp = res;
    for(length = 0; s[length] != '\0'; length++)
        ;
    for(row = 0, col = 0; row < numRows; row++, col = 0){
        while( pos < length ){
            *resp = s[pos];
            resp++;
            tmp = pos;
            if(row == 0 || row == numRows - 1){
                pos += 2 * numRows - 2;
            }
            else{
                pos += (col % 2 == 0) ? ( 2 * numRows - 2 * row - 2 ) : ( 2 * row  );
            }
            if(pos == tmp){
                pos = pos + 1;
            }
            col++;
        }
        pos = row + 1;
    }
    resp = res;
    return resp;
}
/* beats 7% */