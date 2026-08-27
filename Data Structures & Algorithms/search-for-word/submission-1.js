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
        //found
        if (index === word.length) {
            return true;
        }

        //skip
        //// Out of bounds
        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
            return false;
        }
        //// Wrong character
        if (board[row][col] !== word[index]) {
            return false;
        }
        //// Already visited
        if (board[row][col] === "#") {
            return false;
        }

        //// mark visited
        const original = board[row][col];
        board[row][col] = "#";

        //explore
        const found =
            this.dfs(board, word, row + 1, col, index + 1) ||
            this.dfs(board, word, row - 1, col, index + 1) ||
            this.dfs(board, word, row, col + 1, index + 1) ||
            this.dfs(board, word, row, col - 1, index + 1);

        //undo
        board[row][col] = original;

        return found;
    }
}
