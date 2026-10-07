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
     * Space: O(h or log n)
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {

        if(!p && !q) return true;

        if(!p || !q) return false;

        if(p.val != q.val) return false;

        const lsame = this.isSameTree(p.left, q.left);
        const rsame = this.isSameTree(p.right, q.right);

        return lsame && rsame;
    }
}
