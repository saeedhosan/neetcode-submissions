class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islands = 0;

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] === "1") {
                    islands++;
                    grid[row][col] = "0";
                    this.bfs(grid, row, col);
                }
            }
        }

        return islands;
    }

    bfs(grid, r, c) {
        const queue = new Queue([[r, c]]);
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        while (!queue.isEmpty()) {
            const [qrow, qcol] = queue.dequeue();
            for (const [drow, dcol] of directions) {
                const row = drow + qrow;
                const col = dcol + qcol;

                if (
                    row >= 0 &&
                    row < grid.length &&
                    col >= 0 &&
                    col < grid[0].length &&
                    grid[row][col] === "1"
                ) {
                    grid[row][col] = "0";
                    queue.enqueue([row, col]);
                }
            }
        }
    }
}
