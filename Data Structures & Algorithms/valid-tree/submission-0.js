class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (n === 0) return true;

        const graph = Array.from({ length: n }, () => []);
        const visited = new Array(n).fill(false);

        for (const [a, b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }

        if (!this.dfs(graph, 0, -1, visited)) {
            return false;
        }

        for (let node = 0; node < n; node++) {
            if (!visited[node]) {
                return false;
            }
        }

        return edges.length === n - 1;
    }

    dfs(graph, node, parent, visited) {
        if (visited[node]) {
            return false;
        }

        visited[node] = true;

        for (const neighbor of graph[node]) {
            if (neighbor === parent) {
                continue;
            }
            if (!this.dfs(graph, neighbor, node, visited)) {
                return false;
            }
        }

        return true;
    }
}
