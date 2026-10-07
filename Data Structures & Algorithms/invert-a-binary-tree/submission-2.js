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
     * Time: O(n) and Space: O(log n)
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        
        if(!root) return root;

        //swipe 
        const tmp = root.left;
        root.left = root.right;
        root.right = tmp;

        this.invertTree(root.left);
        this.invertTree(root.right);

        return root;
    }
}
