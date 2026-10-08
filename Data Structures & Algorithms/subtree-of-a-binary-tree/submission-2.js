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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!subRoot) return true; 
        if (!root) return false; 

        if (this.isSameTree(root, subRoot)) return true; 

        return (
            this.isSubtree(root.left, subRoot) ||
            this.isSubtree(root.right, subRoot)
        );
    }
    /**
     * @param {TreeNode} s
     * @param {TreeNode} t
     * @return {boolean}
     */
    isSameTree(s, t) {
        if (!s && !t) return true;
        if (!s || !t) return false;
        if (s.val != t.val) return false;

        const lsame = this.isSameTree(s.left, t.left);
        const rsame = this.isSameTree(s.right, t.right);

        return lsame && rsame;
    }
}
