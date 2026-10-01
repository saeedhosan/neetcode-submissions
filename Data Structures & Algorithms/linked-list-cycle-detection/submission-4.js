/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /** 
     * Time: O(n) and Space: O(n)
     * 
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        // 1 > 2 > 3 
        // 2 > 3 > 1
        // 3 > 1 > 2
        // 1 > 2 > 3 cycle

        const seen = new Set;

        while(head?.next){
            
            if(seen.has(head)) return true;

            seen.add(head);

            head = head.next;
        }

        return false;
    }
}
