class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        //scan rows and cols
        //find unvisited
        //
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

    /**
     * Breath-Fist-Search
     *
     * @param {character[][]} grid
     * @param {number} row
     * @param {number} col
     * @return {number}
     */
    bfs(grid, row, col) {
        const queue = new Queue();

        queue.enqueue([row, col]);
        grid[row][col] = "0";

        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        while (!queue.isEmpty()) {
            const [qrow, qcol] = queue.dequeue();

            for (const [drow, dcol] of directions) {
                const newRow = qrow + drow;
                const newCol = qcol + dcol;

                if (this.condition(grid, newRow, newCol)) {
                    grid[newRow][newCol] = "0";
                    queue.enqueue([newRow, newCol]);
                }
            }
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
