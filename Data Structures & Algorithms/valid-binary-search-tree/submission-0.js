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
    isValidBST(root) {
        if (root === null) {
            return true;
        }

        return this.validate(root, -Infinity, Infinity);
    }

    /**
     * @param {TreeNode} node
     * @param {any} left
     * @param {any} right
     * @return {boolean}
     */
    validate(node, left, right) {
        if (!node) {
            return true;
        }

        if (!(node.val < right && node.val > left)) {
            return false;
        }

        return (
            this.validate(node.left, left, node.val) &&
            this.validate(node.right, node.val, right)
        );
    }
}
