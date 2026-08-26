/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const maps = new Map();
        return this.dfs(node, maps);
    }

    dfs(node, maps) {
        if (node === null) return null;

        if (maps.has(node)) return maps.get(node);

        const clone = new Node(node.val);

        maps.set(node, clone);

        for (const neighbor of node.neighbors) {
            clone.neighbors.push(this.dfs(neighbor, maps));
        }

        return clone;
        //return null node
        //return old if has
        //clone original
        //clone+node push
        //visit neighbors
        //deep copy/push
        //return copy
    }
}
