/*
TAGS: Hash Table.
Determine if a Sudoku is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.


A partially filled sudoku which is valid.

Note:
A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.
*/
bool block(char** board, int str, int stc, int* hash) {
	for (int i = str; i < str + 3; ++i) {
		for (int j = stc; j < stc + 3; ++j) {
			if (board[i][j] != '.') {
				int c = (int)board[i][j] - 48;
				if (hash[c] == 1) {
					for (int i = 0; i < 10; ++i) {
						hash[i] = 0;
					}
					return false;
				}
				else {
					hash[c] = 1;
				}
			}
		}
	}
	for (int i = 0; i < 10; ++i) {
		hash[i] = 0;
	}
	return true;
}
bool isValidSudoku(char** board, int boardRowSize, int boardColSize) {
	int hash[10] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
	for (int i = 0; i < boardRowSize; ++i) {
		for (int j = 0; j < boardColSize; ++j) {
			if (board[i][j] != '.') {
				int c = (int)board[i][j] - 48;
				if (hash[c] == 1) {
					return false;
				}
				else {
					hash[c] = 1;
				}
			}
		}
		for (int i = 0; i < 10; ++i) {
			hash[i] = 0;
		}
	}
	for (int i = 0; i < boardColSize; ++i) {
		for (int j = 0; j < boardRowSize; ++j) {
			if (board[j][i] != '.') {
				int c = (int)board[j][i] - 48;
				if (hash[c] == 1) {
					return false;
				}
				else {
					hash[c] = 1;
				}
			}
		}
		for (int i = 0; i < 10; ++i) {
			hash[i] = 0;
		}
	}
	for (int i = 0; i <= 6; i += 3) {
		for (int j = 0; j <= 6; j += 3) {
			if (!block(board, i, j, hash)) {
				return false;
			}
		}
	}
	return true;
}
