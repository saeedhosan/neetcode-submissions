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
     * Time: O(n)
     * Memo: O(log n)
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {

        if(!root) return 0;

        const leftCount  = this.maxDepth(root.left);
        const rightCount = this.maxDepth(root.right);

        return 1 + Math.max(leftCount, rightCount);
    }
}
