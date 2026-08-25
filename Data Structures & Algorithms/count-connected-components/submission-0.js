class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {

        const graph = Array.from({ length: n }, () => []);

        for (const [a, b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }

        const visited = new Set();
        let components = 0;

        for (let node = 0; node < n; node++) {
            if (!visited.has(node)) {
                components++;
                this.dfs(graph, node, visited);
            }
        }

        return components;
    }

    dfs(graph, node, visited) {
        visited.add(node);

        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                this.dfs(graph, neighbor, visited);
            }
        }
    }
}
