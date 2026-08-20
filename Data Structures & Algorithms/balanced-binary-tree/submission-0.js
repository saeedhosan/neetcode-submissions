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
     * @return {boolean}
     */
    isBalanced(root) {
        function dfs(root) {
            if (!root) {
                return [true, 0];
            }

            const left = dfs(root.left);
            const right = dfs(root.right);
            const height = 1 + Math.max(left[1], right[1]);
            const balanced =
                left[0] === true && right[0] === true && Math.abs(left[1]) - right[1] <= 1;

            return [balanced, height];
        }

        return dfs(root)[0];
    }
}
