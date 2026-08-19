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
    preorderTraversal(root) {
        
        if (!root) {
            return [];
        }

        const result = [];

        // visit current node
        result.push(root.val);

        // go left
        result.push(...this.preorderTraversal(root.left));

        // go right
        result.push(...this.preorderTraversal(root.right));

        return result;
    }
}
