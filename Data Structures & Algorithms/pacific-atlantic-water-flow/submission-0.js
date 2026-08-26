class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length;
        const cols = heights[0].length;
        const pacific = Array.from({ length: rows }, () => Array(cols).fill(false));
        const atlantic = Array.from({ length: rows }, () => Array(cols).fill(false));

        for (let row = 0; row < rows; row++) {
            this.dfs(heights, row, 0, pacific);
        }

        for (let col = 0; col < cols; col++) {
            this.dfs(heights, 0, col, pacific);
        }

        for (let row = 0; row < rows; row++) {
            this.dfs(heights, row, cols - 1, atlantic);
        }

        for (let col = 0; col < cols; col++) {
            this.dfs(heights, rows - 1, col, atlantic);
        }

        //generate result
        const result = [];

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (pacific[row][col] && atlantic[row][col]) {
                    result.push([row, col]);
                }
            }
        }

        return result;

        // start ocean borders
        // mark visited
        // check 4 directions
        // DFS neighbor
        // generate result
    }

    dfs(heights, r, c, pacific) {
        //mark visited
        pacific[r][c] = true;

        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        for (const [drow, dcol] of directions) {
            const row = r + drow;
            const col = c + dcol;

            if (
                row >= 0 &&
                row < heights.length &&
                col >= 0 &&
                col < heights[0].length &&
                !pacific[row][col] &&
                heights[row][col] >= heights[r][c]
            ) {
                this.dfs(heights, row, col, pacific);
            }
        }
    }
}
