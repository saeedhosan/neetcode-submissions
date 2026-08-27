class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     *
     * Time: O(R x C x 3^L)
     * Space: O(L)
     */
    exist(board, word) {
        const rows = board.length;
        const cols = board[0].length;

        //every cells
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (this.dfs(board, word, row, col, 0)) {
                    return true;
                }
            }
        }

        return false;
    }

    dfs(board, word, row, col, index) {
        // found
        if (index === word.length) {
            return true;
        }

        //skip
        if (
            row < 0 ||
            row >= board.length ||
            col < 0 ||
            col >= board[0].length ||
            board[row][col] != word[index] ||
            board[row][col] === "#"
        ) {
            return false;
        }

        //mark visited
        const original = board[row][col];
        board[row][col] = "#";

        //explore
        const directions = [
            [-1, 0],
            [1, 0],
            [0, 1],
            [0, -1],
        ];
        for (const [drow, dcol] of directions) {
            const newRow = drow + row;
            const newCol = dcol + col;

            if (this.dfs(board, word, newRow, newCol, index + 1)) {
                board[row][col] = original;
                return true;
            }
        }

        // undo
        board[row][col] = original;

        return false;
    }
}
