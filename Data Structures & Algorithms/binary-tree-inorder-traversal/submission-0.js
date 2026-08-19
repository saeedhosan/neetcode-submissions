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
     * @return {number[]}
     */
    inorderTraversal(root) {
        // nulll to return
        // go left - recursion
        // visit - current root
        // go right - recursion

        if (!root) {
            return [];
        }

        const result = [];

        // go left
        result.push(...this.inorderTraversal(root.left));

        // visit root
        result.push(root.val);

        // go right
        result.push(...this.inorderTraversal(root.right));

        return result;
    }
}
