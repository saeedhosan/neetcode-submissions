class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let islands = 0;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === "1") {
                    islands += 1;
                    this.bfs(grid, row, col);
                }
            }
        }

        return islands;
    }

    bfs(grid, row, col) {
        const queue = [[row, col]];

        grid[row][col] = "0";

        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        while (queue.length > 0) {
            const [currentRow, currentCol] = queue.shift();

            for (const [dr, dc] of directions) {
                const newRow = currentRow + dr;
                const newCol = currentCol + dc;

                if (
                    newRow >= 0 &&
                    newRow < grid.length &&
                    newCol >= 0 &&
                    newCol < grid[0].length &&
                    grid[newRow][newCol] === "1"
                ) {
                    grid[newRow][newCol] = "0";
                    queue.push([newRow, newCol]);
                }
            }
        }
    }
}
