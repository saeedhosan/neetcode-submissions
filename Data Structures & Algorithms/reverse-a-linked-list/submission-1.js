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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {

        //save the next
        //reverse link
        //move previous
        //move current
        //return previous

        let previous    = null;
        let current     = head;
        let next        = null;

        while(current){
            next            = current.next;
            current.next    = previous;
            previous        = current;
            current         = next;
        }

        return previous;

    }
}
