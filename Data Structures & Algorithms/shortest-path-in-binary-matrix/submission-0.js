class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const n = grid.length;

        // Start or destination is blocked
        if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
            return -1;
        }

        return this.bfs(grid, n);
    }

    bfs(grid, n) {
        const queue = new Queue([[0, 0, 1]]);

        // Mark start visited
        grid[0][0] = 1;

        const directions = [
            [-1, -1], // up-left
            [-1, 0], // up
            [-1, 1], // up-right

            [0, -1], // left
            [0, 1], // right

            [1, -1], // down-left
            [1, 0], // down
            [1, 1], // down-right
        ];

        while (!queue.isEmpty()) {
            const [row, col, distance] = queue.dequeue();

            // Reached destination
            if (row === n - 1 && col === n - 1) {
                return distance;
            }

            for (const [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;

                // check the new position
                if (
                    newRow >= 0 &&
                    newRow < n &&
                    newCol >= 0 &&
                    newCol < n &&
                    grid[newRow][newCol] === 0
                ) {
                    grid[newRow][newCol] = 1;
                    queue.push([newRow, newCol, distance + 1]);
                }
            }
        }

        return -1;
    }
}
