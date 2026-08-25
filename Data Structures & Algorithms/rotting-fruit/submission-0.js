class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const queue = new Queue();
        let fresh = 0;

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] === 2) {
                    queue.push([row, col]);
                }

                if (grid[row][col] === 1) {
                    fresh++;
                }
            }
        }
        
        return this.bfs(grid, queue, fresh);
    }

    bfs(grid, queue, fresh) {
        const rows = grid.length;
        const cols = grid[0].length;
        let minutes = 0;

        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        while (!queue.isEmpty() && fresh > 0) {
            const size = queue.size();

            for (let i = 0; i < size; i++) {
                const [qrow, qcol] = queue.dequeue();

                for (const [dr, dc] of directions) {
                    const row = qrow + dr;
                    const col = qcol + dc;

                    if (row >= 0 && row < rows && col >= 0 && col < cols && grid[row][col] === 1) {
                        fresh--;
                        grid[row][col] = 2;
                        queue.push([row, col]);
                    }
                }
            }

            minutes++;
        }

        return fresh === 0 ? minutes : -1;
    }
}
