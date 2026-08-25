class Solution {
    /**
     * @param {number[][]} isConnected
     * @return {number}
     */
    findCircleNum(isConnected) {
        
        const visited = new Set();
        let provinces = 0;

        for (let node = 0; node < isConnected.length; node++) {
            if (!visited.has(node)) {
                provinces += 1;
                this.dfs(isConnected, visited, node);
            }
        }

        return provinces;

        //Formula: Visit > Mark > Find neighbors > Repeat with DFS
    }

    /**
     * @param {number[][]} isConnected
     * @param {Set} visited
     * @param {number} node
     * @return {void}
     */
    dfs(isConnected, visited, node) {
        visited.add(node);

        for (let neighbor = 0; neighbor < isConnected.length; neighbor++) {
            if (isConnected[node][neighbor] === 1 && !visited.has(neighbor)) {
                this.dfs(isConnected, visited, neighbor);
            }
        }
    }
}
