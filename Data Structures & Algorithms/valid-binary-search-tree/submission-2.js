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
     * T and S:  O(n)
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        return this.valid(-Infinity, root, Infinity);
    }

    valid(left, node, right){

        if(node === null) return true;


        if(!(left < node.val && node.val < right)){
            return false;
        }

        return (
            //- < 1 < 2
            this.valid(left, node.left, node.val) &&

            //2 < 3 < +
            this.valid(node.val, node.right, right)
        );
    }
}
