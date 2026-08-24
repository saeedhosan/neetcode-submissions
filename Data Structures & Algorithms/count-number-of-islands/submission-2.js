class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        //scan rows and cols
        //find unvisited
        //increment land
        //DFS algorithm
        
        const rows = grid.length;
        const cols = grid[0].length;
        let islands = 0;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === "1") {
                    islands += 1;
                    this.dfs(grid, row, col);
                }
            }
        }

        return islands;
    }

    /**
     * Depth-Fist-Search
     *
     * @param {character[][]} grid
     * @param {number} row
     * @param {number} col
     * @return {number}
     */
    dfs(grid, row, col) {
        if (!this.condition(grid, row, col)) {
            return;
        }

        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        grid[row][col] = "0";

        for (const [drow, dcol] of directions) {
            this.dfs(grid, row + drow, col + dcol);
        }
    }

    /**
     * Boundary  and land check
     *
     * @param {character[][]} grid
     * @return {bool}
     */
    condition(grid, row, col) {
        return (
            row >= 0 &&
            row < grid.length &&
            col >= 0 &&
            col < grid[0].length &&
            grid[row][col] === "1"
        );
    }
}
