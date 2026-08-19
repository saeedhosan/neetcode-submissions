/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = [];

        if (!root) return res;

        const queue = [root];

        while (queue.length > 0) {
            let level = [];

            for (let i = queue.length; i > 0; i--) {
                let node = queue.shift();
                if (node !== null) {
                    level.push(node.val);
                    queue.push(node.left);
                    queue.push(node.right);
                }
            }

            if (level.length > 0) {
                res.push(level);
            }
        }

        return res;
    }
}
